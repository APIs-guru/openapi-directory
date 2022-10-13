from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class LinkApplicationProviderEnum(str, Enum):
    MESSENGER = "messenger"
    VIBER_SERVICE_MSG = "viber_service_msg"
    WHATSAPP = "whatsapp"


@dataclass
class LinkApplicationPathParams:
    external_id: str = field(default=None, metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    provider: LinkApplicationProviderEnum = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class LinkApplicationRequestBody:
    application: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    

@dataclass
class LinkApplicationSecurityOption1:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class LinkApplicationSecurityOption2:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class LinkApplicationSecurity:
    option1: Optional[LinkApplicationSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[LinkApplicationSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class LinkApplicationRequest:
    path_params: LinkApplicationPathParams = field(default=None)
    request: LinkApplicationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: LinkApplicationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class LinkApplication403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class LinkApplication409ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class LinkApplicationResponse:
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    account_response: Optional[shared.AccountResponse] = field(default=None)
    content_type: str = field(default=None)
    link_application_403_application_json_object: Optional[LinkApplication403ApplicationJSON] = field(default=None)
    link_application_409_application_json_object: Optional[LinkApplication409ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
