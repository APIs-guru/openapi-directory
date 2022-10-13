from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum(str, Enum):
    LOCATION_TYPE_UNSPECIFIED = "LOCATION_TYPE_UNSPECIFIED"
    SINGLE_REGION = "SINGLE_REGION"
    MULTI_REGION = "MULTI_REGION"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ZoneResourceSpec:
    location_type: Optional[GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationType' }})
    
