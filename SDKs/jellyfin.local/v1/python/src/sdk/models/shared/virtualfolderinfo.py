from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualFolderInfo:
    r"""VirtualFolderInfo
    Used to hold information about a user's list of configured virtual folders.
    """
    
    collection_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionType') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemId') }})
    library_options: Optional[LibraryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LibraryOptions') }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locations') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    primary_image_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryImageItemId') }})
    refresh_progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshProgress') }})
    refresh_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshStatus') }})
    
