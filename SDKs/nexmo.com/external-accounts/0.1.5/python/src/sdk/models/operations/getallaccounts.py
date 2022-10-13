from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
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
class GetAllAccountsSecurityOption1:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAllAccountsSecurityOption2:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAllAccountsSecurity:
    option1: Optional[GetAllAccountsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAllAccountsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAllAccountsRequest:
    query_params: GetAllAccountsQueryParams = field(default=None)
    security: GetAllAccountsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksFirst:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksLast:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksNext:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksPrev:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSONLinks:
    first: Optional[GetAllAccounts200ApplicationJSONLinksFirst] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    last: Optional[GetAllAccounts200ApplicationJSONLinksLast] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[GetAllAccounts200ApplicationJSONLinksNext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    prev: Optional[GetAllAccounts200ApplicationJSONLinksPrev] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    self: Optional[GetAllAccounts200ApplicationJSONLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetAllAccounts200ApplicationJSON:
    embedded: Optional[List[shared.GetAllAccountResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[GetAllAccounts200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_number' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    

@dataclass
class GetAllAccountsResponse:
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    content_type: str = field(default=None)
    get_all_accounts_200_application_json_object: Optional[GetAllAccounts200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
