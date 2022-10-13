from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TransferBalancePathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransferBalanceSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class TransferBalanceRequest:
    path_params: TransferBalancePathParams = field(default=None)
    request: shared.TransferBalanceOrCreditRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TransferBalanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class TransferBalance401ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class TransferBalance404ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class TransferBalance422ApplicationJSONInvalidParameters:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class TransferBalance422ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    invalid_parameters: List[TransferBalance422ApplicationJSONInvalidParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_parameters' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class TransferBalanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    transfer_balance_response: Optional[Any] = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    transfer_balance_401_application_json_object: Optional[TransferBalance401ApplicationJSON] = field(default=None)
    transfer_balance_404_application_json_object: Optional[TransferBalance404ApplicationJSON] = field(default=None)
    transfer_balance_422_application_json_object: Optional[TransferBalance422ApplicationJSON] = field(default=None)
    
