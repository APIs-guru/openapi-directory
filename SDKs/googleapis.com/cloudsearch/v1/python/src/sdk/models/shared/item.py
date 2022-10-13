from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import itemacl
from . import itemcontent
from . import itemmetadata
from . import itemstatus
from . import itemstructureddata

class ItemItemTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    CONTENT_ITEM = "CONTENT_ITEM"
    CONTAINER_ITEM = "CONTAINER_ITEM"
    VIRTUAL_CONTAINER_ITEM = "VIRTUAL_CONTAINER_ITEM"


@dataclass_json
@dataclass
class Item:
    acl: Optional[itemacl.ItemACL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl' }})
    content: Optional[itemcontent.ItemContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    item_type: Optional[ItemItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemType' }})
    metadata: Optional[itemmetadata.ItemMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queue' }})
    status: Optional[itemstatus.ItemStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    structured_data: Optional[itemstructureddata.ItemStructuredData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredData' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
