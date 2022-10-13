from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAnalysisPathParams:
    analysis_id: str = field(default=None, metadata={'path_param': { 'field_name': 'analysis-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnalysisSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnalysisRequest:
    path_params: GetAnalysisPathParams = field(default=None)
    security: GetAnalysisSecurity = field(default=None)
    

@dataclass
class GetAnalysisResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    analysis: Optional[shared.Analysis] = field(default=None)
    
