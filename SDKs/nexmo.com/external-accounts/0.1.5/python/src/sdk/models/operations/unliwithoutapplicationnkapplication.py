from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class UnliWithoutApplicationnkApplicationProviderEnum(str, Enum):
    MESSENGER = "messenger"
    VIBER_SERVICE_MSG = "viber_service_msg"
    WHATSAPP = "whatsapp"


@dataclass
class UnliWithoutApplicationnkApplicationPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    external_id: str = field(metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    provider: UnliWithoutApplicationnkApplicationProviderEnum = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnliWithoutApplicationnkApplicationSecurity:
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared.SchemeBearerAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UnliWithoutApplicationnkApplication403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class UnliWithoutApplicationnkApplication409ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class UnliWithoutApplicationnkApplicationRequest:
    path_params: UnliWithoutApplicationnkApplicationPathParams = field()
    security: UnliWithoutApplicationnkApplicationSecurity = field()
    

@dataclass
class UnliWithoutApplicationnkApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    unli_without_applicationnk_application_403_application_json_object: Optional[UnliWithoutApplicationnkApplication403ApplicationJSON] = field(default=None)
    unli_without_applicationnk_application_409_application_json_object: Optional[UnliWithoutApplicationnkApplication409ApplicationJSON] = field(default=None)
    
