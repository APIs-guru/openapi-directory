from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestAnalysisPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAnalysisQueryParams:
    commit: str = field(metadata={'query_param': { 'field_name': 'commit', 'style': 'form', 'explode': True }})
    language: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestAnalysisSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RequestAnalysisRequest:
    path_params: RequestAnalysisPathParams = field()
    query_params: RequestAnalysisQueryParams = field()
    security: RequestAnalysisSecurity = field()
    

@dataclass
class RequestAnalysisResponse:
    content_type: str = field()
    status_code: int = field()
    operation: Optional[shared.Operation] = field(default=None)
    
