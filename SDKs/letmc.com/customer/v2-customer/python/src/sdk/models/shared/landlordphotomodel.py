from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LandlordPhotoModelPhotoTypeEnum(str, Enum):
    PHOTO = "Photo"
    MAP = "Map"
    FLOOR_PLAN = "FloorPlan"
    SITE_MAP = "SiteMap"
    AERIAL_PHOTO = "AerialPhoto"


@dataclass_json
@dataclass
class LandlordPhotoModel:
    e_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ETag' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileName' }})
    oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OID' }})
    photo_type: Optional[LandlordPhotoModelPhotoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhotoType' }})
    
