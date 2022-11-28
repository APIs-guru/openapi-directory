from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class LinkApplicationProviderEnum(str, Enum):
    MESSENGER = "messenger"
    VIBER_SERVICE_MSG = "viber_service_msg"
    WHATSAPP = "whatsapp"


@dataclass
class LinkApplicationPathParams:
    external_id: str = field(metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    provider: LinkApplicationProviderEnum = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class LinkApplicationRequestBody:
    application: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    

@dataclass
class LinkApplicationSecurity:
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared.SchemeBearerAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class LinkApplication403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class LinkApplication409ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class LinkApplicationRequest:
    path_params: LinkApplicationPathParams = field()
    request: LinkApplicationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: LinkApplicationSecurity = field()
    

@dataclass
class LinkApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    account_response: Optional[shared.AccountResponse] = field(default=None)
    link_application_403_application_json_object: Optional[LinkApplication403ApplicationJSON] = field(default=None)
    link_application_409_application_json_object: Optional[LinkApplication409ApplicationJSON] = field(default=None)
    
