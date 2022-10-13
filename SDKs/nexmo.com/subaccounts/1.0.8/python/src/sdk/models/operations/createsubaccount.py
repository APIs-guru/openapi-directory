from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSubAccountPathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSubAccountSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSubAccountRequest:
    path_params: CreateSubAccountPathParams = field(default=None)
    request: shared.NewSubaccountRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSubAccountSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateSubAccount401ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class CreateSubAccount404ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class CreateSubAccount422ApplicationJSONInvalidParameters:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class CreateSubAccount422ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    invalid_parameters: List[CreateSubAccount422ApplicationJSONInvalidParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_parameters' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateSubAccountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subaccount_create_response: Optional[shared.SubaccountCreateResponse] = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    create_sub_account_401_application_json_object: Optional[CreateSubAccount401ApplicationJSON] = field(default=None)
    create_sub_account_404_application_json_object: Optional[CreateSubAccount404ApplicationJSON] = field(default=None)
    create_sub_account_422_application_json_object: Optional[CreateSubAccount422ApplicationJSON] = field(default=None)
    
