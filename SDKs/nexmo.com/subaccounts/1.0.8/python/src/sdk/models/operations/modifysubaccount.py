from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ModifySubaccountPathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    subaccount_key: str = field(default=None, metadata={'path_param': { 'field_name': 'subaccount_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifySubaccountSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ModifySubaccountRequest:
    path_params: ModifySubaccountPathParams = field(default=None)
    request: shared.ModifySubaccountRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ModifySubaccountSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ModifySubaccount401ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ModifySubaccount404ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ModifySubaccount422ApplicationJSONInvalidParameters:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class ModifySubaccount422ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    invalid_parameters: List[ModifySubaccount422ApplicationJSONInvalidParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_parameters' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class ModifySubaccountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subaccount_response: Optional[Any] = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    modify_subaccount_401_application_json_object: Optional[ModifySubaccount401ApplicationJSON] = field(default=None)
    modify_subaccount_404_application_json_object: Optional[ModifySubaccount404ApplicationJSON] = field(default=None)
    modify_subaccount_422_application_json_object: Optional[ModifySubaccount422ApplicationJSON] = field(default=None)
    
