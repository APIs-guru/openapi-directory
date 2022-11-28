from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Places:
    r"""Places
    Defines the union of areas represented by a set of places.
    """
    
    place_infos: Optional[List[PlaceInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeInfos') }})
    
