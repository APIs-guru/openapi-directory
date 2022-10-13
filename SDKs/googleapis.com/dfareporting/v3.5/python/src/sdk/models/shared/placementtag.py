from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tagdata


@dataclass_json
@dataclass
class PlacementTag:
    placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementId' }})
    tag_datas: Optional[List[tagdata.TagData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagDatas' }})
    
