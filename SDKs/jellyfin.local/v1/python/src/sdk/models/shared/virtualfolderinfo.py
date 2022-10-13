from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import libraryoptions


@dataclass_json
@dataclass
class VirtualFolderInfo:
    collection_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionType' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemId' }})
    library_options: Optional[libraryoptions.LibraryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LibraryOptions' }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Locations' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    primary_image_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryImageItemId' }})
    refresh_progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshProgress' }})
    refresh_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshStatus' }})
    
