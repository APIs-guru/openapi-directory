from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedIssuePathParams:
    issue_id: int = field(default=None, metadata={'path_param': { 'field_name': 'issueId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetManagedIssueSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedIssueSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedIssueSecurity:
    option1: Optional[GetManagedIssueSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedIssueSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedIssueRequest:
    path_params: GetManagedIssuePathParams = field(default=None)
    security: GetManagedIssueSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedIssueDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedIssueResponse:
    content_type: str = field(default=None)
    managed_issue: Optional[shared.ManagedIssue] = field(default=None)
    status_code: int = field(default=None)
    get_managed_issue_default_application_json_object: Optional[GetManagedIssueDefaultApplicationJSON] = field(default=None)
    
