from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TransferBalancePathParams:
    api_key: str = field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransferBalanceSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class TransferBalance401ApplicationJSON:
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class TransferBalance404ApplicationJSON:
    r"""TransferBalance404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class TransferBalance422ApplicationJSONInvalidParameters:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class TransferBalance422ApplicationJSON:
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_parameters: List[TransferBalance422ApplicationJSONInvalidParameters] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class TransferBalanceRequest:
    path_params: TransferBalancePathParams = field()
    request: shared.TransferBalanceOrCreditRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: TransferBalanceSecurity = field()
    

@dataclass
class TransferBalanceResponse:
    content_type: str = field()
    status_code: int = field()
    transfer_balance_response: Optional[Any] = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    transfer_balance_401_application_json_object: Optional[TransferBalance401ApplicationJSON] = field(default=None)
    transfer_balance_404_application_json_object: Optional[TransferBalance404ApplicationJSON] = field(default=None)
    transfer_balance_422_application_json_object: Optional[TransferBalance422ApplicationJSON] = field(default=None)
    
