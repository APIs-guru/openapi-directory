from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placeinfo


@dataclass_json
@dataclass
class Places:
    place_infos: Optional[List[placeinfo.PlaceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeInfos' }})
    
