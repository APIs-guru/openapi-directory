from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ShippingMethodFieldsTypeEnum(str, Enum):
    FREE = "free"
    TABLES = "tables"
    CORREIOSBR = "correiosbr"
    CORREOS_CHILE = "correos_chile"
    CHILEXPRESS = "chilexpress"
    FLAT = "flat"
    UPS = "ups"
    EXTERNAL = "external"


@dataclass_json
@dataclass
class ShippingMethodFields:
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback_url') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    fetch_services_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch_services_url') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    postal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal') }})
    services: Optional[List[ShippingService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[ShippingMethodFieldsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
