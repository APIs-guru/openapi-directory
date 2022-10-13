from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import debugoptions
from . import indexitemoptions
from . import item

class IndexItemRequestModeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SYNCHRONOUS = "SYNCHRONOUS"
    ASYNCHRONOUS = "ASYNCHRONOUS"


@dataclass_json
@dataclass
class IndexItemRequest:
    connector_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorName' }})
    debug_options: Optional[debugoptions.DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugOptions' }})
    index_item_options: Optional[indexitemoptions.IndexItemOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexItemOptions' }})
    item: Optional[item.Item] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    mode: Optional[IndexItemRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
