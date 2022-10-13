from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import shippingservice

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
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback_url' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    fetch_services_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetch_services_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    postal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal' }})
    services: Optional[List[shippingservice.ShippingService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[ShippingMethodFieldsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
