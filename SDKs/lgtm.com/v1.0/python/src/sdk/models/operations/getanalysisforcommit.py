from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAnalysisForCommitPathParams:
    commit_id: str = field(default=None, metadata={'path_param': { 'field_name': 'commit-id', 'style': 'simple', 'explode': False }})
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnalysisForCommitSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAnalysisForCommitRequest:
    path_params: GetAnalysisForCommitPathParams = field(default=None)
    security: GetAnalysisForCommitSecurity = field(default=None)
    

@dataclass
class GetAnalysisForCommitResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    analysis: Optional[shared.Analysis] = field(default=None)
    
