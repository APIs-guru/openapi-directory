from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimensionrange

class DeveloperMetadataLocationLocationTypeEnum(str, Enum):
    DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
    ROW = "ROW"
    COLUMN = "COLUMN"
    SHEET = "SHEET"
    SPREADSHEET = "SPREADSHEET"


@dataclass_json
@dataclass
class DeveloperMetadataLocation:
    dimension_range: Optional[dimensionrange.DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionRange' }})
    location_type: Optional[DeveloperMetadataLocationLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationType' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    spreadsheet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheet' }})
    
