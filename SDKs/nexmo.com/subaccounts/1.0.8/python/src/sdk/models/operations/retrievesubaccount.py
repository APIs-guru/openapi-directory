from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RetrieveSubaccountPathParams:
    api_key: str = field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    subaccount_key: str = field(metadata={'path_param': { 'field_name': 'subaccount_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveSubaccountSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class RetrieveSubaccount401ApplicationJSON:
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class RetrieveSubaccount404ApplicationJSON:
    r"""RetrieveSubaccount404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class RetrieveSubaccountRequest:
    path_params: RetrieveSubaccountPathParams = field()
    security: RetrieveSubaccountSecurity = field()
    

@dataclass
class RetrieveSubaccountResponse:
    content_type: str = field()
    status_code: int = field()
    subaccount_response: Optional[Any] = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    retrieve_subaccount_401_application_json_object: Optional[RetrieveSubaccount401ApplicationJSON] = field(default=None)
    retrieve_subaccount_404_application_json_object: Optional[RetrieveSubaccount404ApplicationJSON] = field(default=None)
    
