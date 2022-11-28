from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetAllAccountsProviderEnum(str, Enum):
    MESSENGER = "messenger"
    VIBER_SERVICE_MSG = "viber_service_msg"
    WHATSAPP = "whatsapp"


@dataclass
class GetAllAccountsQueryParams:
    page_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    provider: Optional[GetAllAccountsProviderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'provider', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllAccountsSecurity:
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared.SchemeBearerAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksFirst:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksLast:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksNext:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksPrev:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinks:
    first: Optional[GetAllAccounts200ApplicationJSONLinksFirst] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: Optional[GetAllAccounts200ApplicationJSONLinksLast] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[GetAllAccounts200ApplicationJSONLinksNext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: Optional[GetAllAccounts200ApplicationJSONLinksPrev] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    self: Optional[GetAllAccounts200ApplicationJSONLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSON:
    embedded: Optional[List[shared.GetAllAccountResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[GetAllAccounts200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_number') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    

@dataclass
class GetAllAccountsRequest:
    query_params: GetAllAccountsQueryParams = field()
    security: GetAllAccountsSecurity = field()
    

@dataclass
class GetAllAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    get_all_accounts_200_application_json_object: Optional[GetAllAccounts200ApplicationJSON] = field(default=None)
    
