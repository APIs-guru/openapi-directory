from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import places
from . import pointradius

class ServiceAreaBusinessBusinessTypeEnum(str, Enum):
    BUSINESS_TYPE_UNSPECIFIED = "BUSINESS_TYPE_UNSPECIFIED"
    CUSTOMER_LOCATION_ONLY = "CUSTOMER_LOCATION_ONLY"
    CUSTOMER_AND_BUSINESS_LOCATION = "CUSTOMER_AND_BUSINESS_LOCATION"


@dataclass_json
@dataclass
class ServiceAreaBusiness:
    business_type: Optional[ServiceAreaBusinessBusinessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessType' }})
    places: Optional[places.Places] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'places' }})
    radius: Optional[pointradius.PointRadius] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radius' }})
    
