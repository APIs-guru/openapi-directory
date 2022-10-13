from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TransferNumberPathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransferNumberSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class TransferNumberRequest:
    path_params: TransferNumberPathParams = field(default=None)
    request: shared.TransferNumberRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TransferNumberSecurity = field(default=None)
    

@dataclass_json
@dataclass
class TransferNumber401ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class TransferNumber409ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class TransferNumber422ApplicationJSONInvalidParameters:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class TransferNumber422ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    invalid_parameters: List[TransferNumber422ApplicationJSONInvalidParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_parameters' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class TransferNumberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    transfer_number_response: Optional[Any] = field(default=None)
    transfer_number_401_application_json_object: Optional[TransferNumber401ApplicationJSON] = field(default=None)
    transfer_number_403_application_json_one_of: Optional[Any] = field(default=None)
    transfer_number_404_application_json_one_of: Optional[Any] = field(default=None)
    transfer_number_409_application_json_object: Optional[TransferNumber409ApplicationJSON] = field(default=None)
    transfer_number_422_application_json_object: Optional[TransferNumber422ApplicationJSON] = field(default=None)
    
