from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class UnliWithoutApplicationnkApplicationProviderEnum(str, Enum):
    MESSENGER = "messenger"
    VIBER_SERVICE_MSG = "viber_service_msg"
    WHATSAPP = "whatsapp"


@dataclass
class UnliWithoutApplicationnkApplicationPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    external_id: str = field(default=None, metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    provider: UnliWithoutApplicationnkApplicationProviderEnum = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnliWithoutApplicationnkApplicationSecurityOption1:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UnliWithoutApplicationnkApplicationSecurityOption2:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UnliWithoutApplicationnkApplicationSecurity:
    option1: Optional[UnliWithoutApplicationnkApplicationSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UnliWithoutApplicationnkApplicationSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UnliWithoutApplicationnkApplicationRequest:
    path_params: UnliWithoutApplicationnkApplicationPathParams = field(default=None)
    security: UnliWithoutApplicationnkApplicationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UnliWithoutApplicationnkApplication403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UnliWithoutApplicationnkApplication409ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class UnliWithoutApplicationnkApplicationResponse:
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    unli_without_applicationnk_application_403_application_json_object: Optional[UnliWithoutApplicationnkApplication403ApplicationJSON] = field(default=None)
    unli_without_applicationnk_application_409_application_json_object: Optional[UnliWithoutApplicationnkApplication409ApplicationJSON] = field(default=None)
    
