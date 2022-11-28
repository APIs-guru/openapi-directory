from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeveloperMetadataLookupLocationMatchingStrategyEnum(str, Enum):
    DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED = "DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED"
    EXACT_LOCATION = "EXACT_LOCATION"
    INTERSECTING_LOCATION = "INTERSECTING_LOCATION"

class DeveloperMetadataLookupLocationTypeEnum(str, Enum):
    DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
    ROW = "ROW"
    COLUMN = "COLUMN"
    SHEET = "SHEET"
    SPREADSHEET = "SPREADSHEET"

class DeveloperMetadataLookupVisibilityEnum(str, Enum):
    DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
    DOCUMENT = "DOCUMENT"
    PROJECT = "PROJECT"


@dataclass_json
@dataclass
class DeveloperMetadataLookup:
    r"""DeveloperMetadataLookup
    Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.
    """
    
    location_matching_strategy: Optional[DeveloperMetadataLookupLocationMatchingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationMatchingStrategy') }})
    location_type: Optional[DeveloperMetadataLookupLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    metadata_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataId') }})
    metadata_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataKey') }})
    metadata_location: Optional[DeveloperMetadataLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataLocation') }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataValue') }})
    visibility: Optional[DeveloperMetadataLookupVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
