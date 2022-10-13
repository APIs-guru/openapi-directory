from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedIssuesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetManagedIssuesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedIssuesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedIssuesSecurity:
    option1: Optional[GetManagedIssuesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedIssuesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedIssuesRequest:
    query_params: GetManagedIssuesQueryParams = field(default=None)
    security: GetManagedIssuesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedIssues200ApplicationJSON:
    data: Optional[List[shared.ManagedIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetManagedIssuesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedIssuesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_managed_issues_200_application_json_object: Optional[GetManagedIssues200ApplicationJSON] = field(default=None)
    get_managed_issues_default_application_json_object: Optional[GetManagedIssuesDefaultApplicationJSON] = field(default=None)
    
