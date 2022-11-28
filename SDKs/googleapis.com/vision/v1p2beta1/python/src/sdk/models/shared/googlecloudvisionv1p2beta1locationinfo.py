from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1LocationInfo:
    r"""GoogleCloudVisionV1p2beta1LocationInfo
    Detected entity location information.
    """
    
    lat_lng: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latLng') }})
    
