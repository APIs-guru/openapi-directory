from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetIssuePathParams:
    alert_key: str = field(metadata={'path_param': { 'field_name': 'alert-key', 'style': 'simple', 'explode': False }})
    project_id: int = field(metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIssueSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetIssueRequest:
    path_params: GetIssuePathParams = field()
    security: GetIssueSecurity = field()
    

@dataclass
class GetIssueResponse:
    content_type: str = field()
    status_code: int = field()
    get_issue_200_application_sarif_plus_json_object: Optional[dict[str, Any]] = field(default=None)
    
