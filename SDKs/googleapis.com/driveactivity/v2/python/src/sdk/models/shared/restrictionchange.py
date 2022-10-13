from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RestrictionChangeFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    SHARING_OUTSIDE_DOMAIN = "SHARING_OUTSIDE_DOMAIN"
    DIRECT_SHARING = "DIRECT_SHARING"
    ITEM_DUPLICATION = "ITEM_DUPLICATION"
    DRIVE_FILE_STREAM = "DRIVE_FILE_STREAM"

class RestrictionChangeNewRestrictionEnum(str, Enum):
    RESTRICTION_UNSPECIFIED = "RESTRICTION_UNSPECIFIED"
    UNRESTRICTED = "UNRESTRICTED"
    FULLY_RESTRICTED = "FULLY_RESTRICTED"


@dataclass_json
@dataclass
class RestrictionChange:
    feature: Optional[RestrictionChangeFeatureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feature' }})
    new_restriction: Optional[RestrictionChangeNewRestrictionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newRestriction' }})
    
