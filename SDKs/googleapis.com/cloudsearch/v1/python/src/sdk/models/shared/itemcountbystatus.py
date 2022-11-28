from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ItemCountByStatusStatusCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    ERROR = "ERROR"
    MODIFIED = "MODIFIED"
    NEW_ITEM = "NEW_ITEM"
    ACCEPTED = "ACCEPTED"


@dataclass_json
@dataclass
class ItemCountByStatus:
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    indexed_items_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexedItemsCount') }})
    status_code: Optional[ItemCountByStatusStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    
