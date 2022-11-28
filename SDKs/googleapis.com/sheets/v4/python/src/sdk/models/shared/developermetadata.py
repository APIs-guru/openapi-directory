from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeveloperMetadataVisibilityEnum(str, Enum):
    DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
    DOCUMENT = "DOCUMENT"
    PROJECT = "PROJECT"


@dataclass_json
@dataclass
class DeveloperMetadata:
    r"""DeveloperMetadata
    Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.
    """
    
    location: Optional[DeveloperMetadataLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataId') }})
    metadata_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataKey') }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataValue') }})
    visibility: Optional[DeveloperMetadataVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
