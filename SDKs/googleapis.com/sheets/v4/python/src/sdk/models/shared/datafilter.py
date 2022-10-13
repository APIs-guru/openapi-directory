from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import developermetadatalookup
from . import gridrange


@dataclass_json
@dataclass
class DataFilter:
    a1_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'a1Range' }})
    developer_metadata_lookup: Optional[developermetadatalookup.DeveloperMetadataLookup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerMetadataLookup' }})
    grid_range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gridRange' }})
    
