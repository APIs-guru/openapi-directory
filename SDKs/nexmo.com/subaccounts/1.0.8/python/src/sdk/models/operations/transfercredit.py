from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TransferCreditPathParams:
    api_key: str = field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransferCreditSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class TransferCredit401ApplicationJSON:
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class TransferCredit404ApplicationJSON:
    r"""TransferCredit404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class TransferCredit422ApplicationJSONInvalidParameters:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class TransferCredit422ApplicationJSON:
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_parameters: List[TransferCredit422ApplicationJSONInvalidParameters] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class TransferCreditRequest:
    path_params: TransferCreditPathParams = field()
    request: shared.TransferBalanceOrCreditRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: TransferCreditSecurity = field()
    

@dataclass
class TransferCreditResponse:
    content_type: str = field()
    status_code: int = field()
    transfer_credit_response: Optional[Any] = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    transfer_credit_401_application_json_object: Optional[TransferCredit401ApplicationJSON] = field(default=None)
    transfer_credit_404_application_json_object: Optional[TransferCredit404ApplicationJSON] = field(default=None)
    transfer_credit_422_application_json_object: Optional[TransferCredit422ApplicationJSON] = field(default=None)
    
