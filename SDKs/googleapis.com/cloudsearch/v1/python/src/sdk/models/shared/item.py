from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ItemItemTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    CONTENT_ITEM = "CONTENT_ITEM"
    CONTAINER_ITEM = "CONTAINER_ITEM"
    VIRTUAL_CONTAINER_ITEM = "VIRTUAL_CONTAINER_ITEM"


@dataclass_json
@dataclass
class Item:
    r"""Item
    Represents a single object that is an item in the search index, such as a file, folder, or a database record.
    """
    
    acl: Optional[ItemACL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl') }})
    content: Optional[ItemContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    item_type: Optional[ItemItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemType') }})
    metadata: Optional[ItemMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queue') }})
    status: Optional[ItemStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    structured_data: Optional[ItemStructuredData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredData') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
