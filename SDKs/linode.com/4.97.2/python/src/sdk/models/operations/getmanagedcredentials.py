from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedCredentialsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetManagedCredentialsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedCredentialsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedCredentialsSecurity:
    option1: Optional[GetManagedCredentialsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedCredentialsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedCredentialsRequest:
    query_params: GetManagedCredentialsQueryParams = field(default=None)
    security: GetManagedCredentialsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedCredentials200ApplicationJSON:
    data: Optional[List[shared.ManagedCredential]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetManagedCredentialsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedCredentialsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_managed_credentials_200_application_json_object: Optional[GetManagedCredentials200ApplicationJSON] = field(default=None)
    get_managed_credentials_default_application_json_object: Optional[GetManagedCredentialsDefaultApplicationJSON] = field(default=None)
    
