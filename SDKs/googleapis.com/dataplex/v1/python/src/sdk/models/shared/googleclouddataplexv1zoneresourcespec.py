from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum(str, Enum):
    LOCATION_TYPE_UNSPECIFIED = "LOCATION_TYPE_UNSPECIFIED"
    SINGLE_REGION = "SINGLE_REGION"
    MULTI_REGION = "MULTI_REGION"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ZoneResourceSpec:
    r"""GoogleCloudDataplexV1ZoneResourceSpec
    Settings for resources attached as assets within a zone.
    """
    
    location_type: Optional[GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    
