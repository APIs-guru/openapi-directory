from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAnalysisForCommitPathParams:
    commit_id: str = field(metadata={'path_param': { 'field_name': 'commit-id', 'style': 'simple', 'explode': False }})
    project_id: int = field(metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnalysisForCommitSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnalysisForCommitRequest:
    path_params: GetAnalysisForCommitPathParams = field()
    security: GetAnalysisForCommitSecurity = field()
    

@dataclass
class GetAnalysisForCommitResponse:
    content_type: str = field()
    status_code: int = field()
    analysis: Optional[shared.Analysis] = field(default=None)
    
