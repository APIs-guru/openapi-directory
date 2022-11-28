from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""RestrictionChange
    Information about restriction policy changes to a feature.
    """
    
    feature: Optional[RestrictionChangeFeatureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feature') }})
    new_restriction: Optional[RestrictionChangeNewRestrictionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newRestriction') }})
    
