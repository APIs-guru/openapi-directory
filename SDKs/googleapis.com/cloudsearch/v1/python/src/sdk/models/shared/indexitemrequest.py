from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IndexItemRequestModeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SYNCHRONOUS = "SYNCHRONOUS"
    ASYNCHRONOUS = "ASYNCHRONOUS"


@dataclass_json
@dataclass
class IndexItemRequest:
    connector_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorName') }})
    debug_options: Optional[DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugOptions') }})
    index_item_options: Optional[IndexItemOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexItemOptions') }})
    item: Optional[Item] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    mode: Optional[IndexItemRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    
