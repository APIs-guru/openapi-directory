from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RetrieveSubaccountsListPathParams:
    api_key: str = field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveSubaccountsListSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class RetrieveSubaccountsList401ApplicationJSON:
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class RetrieveSubaccountsList404ApplicationJSON:
    r"""RetrieveSubaccountsList404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class RetrieveSubaccountsListRequest:
    path_params: RetrieveSubaccountsListPathParams = field()
    security: RetrieveSubaccountsListSecurity = field()
    

@dataclass
class RetrieveSubaccountsListResponse:
    content_type: str = field()
    status_code: int = field()
    subaccounts_all_response: Optional[Any] = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    retrieve_subaccounts_list_401_application_json_object: Optional[RetrieveSubaccountsList401ApplicationJSON] = field(default=None)
    retrieve_subaccounts_list_404_application_json_object: Optional[RetrieveSubaccountsList404ApplicationJSON] = field(default=None)
    
