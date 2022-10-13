from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import developermetadatalocation

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
    location_matching_strategy: Optional[DeveloperMetadataLookupLocationMatchingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationMatchingStrategy' }})
    location_type: Optional[DeveloperMetadataLookupLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationType' }})
    metadata_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataId' }})
    metadata_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataKey' }})
    metadata_location: Optional[developermetadatalocation.DeveloperMetadataLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataLocation' }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataValue' }})
    visibility: Optional[DeveloperMetadataLookupVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
