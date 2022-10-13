from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetIssuePathParams:
    alert_key: str = field(default=None, metadata={'path_param': { 'field_name': 'alert-key', 'style': 'simple', 'explode': False }})
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIssueSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetIssueRequest:
    path_params: GetIssuePathParams = field(default=None)
    security: GetIssueSecurity = field(default=None)
    

@dataclass
class GetIssueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_issue_200_application_sarif_plus_json_object: Optional[dict[str, Any]] = field(default=None)
    
