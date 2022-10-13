from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import idfilter
from . import inventorysourcefilter
from . import parententityfilter

class CreateSdfDownloadTaskRequestVersionEnum(str, Enum):
    SDF_VERSION_UNSPECIFIED = "SDF_VERSION_UNSPECIFIED"
    SDF_VERSION_3_1 = "SDF_VERSION_3_1"
    SDF_VERSION_4 = "SDF_VERSION_4"
    SDF_VERSION_4_1 = "SDF_VERSION_4_1"
    SDF_VERSION_4_2 = "SDF_VERSION_4_2"
    SDF_VERSION_5 = "SDF_VERSION_5"
    SDF_VERSION_5_1 = "SDF_VERSION_5_1"
    SDF_VERSION_5_2 = "SDF_VERSION_5_2"
    SDF_VERSION_5_3 = "SDF_VERSION_5_3"
    SDF_VERSION_5_4 = "SDF_VERSION_5_4"
    SDF_VERSION_5_5 = "SDF_VERSION_5_5"


@dataclass_json
@dataclass
class CreateSdfDownloadTaskRequest:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    id_filter: Optional[idfilter.IDFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idFilter' }})
    inventory_source_filter: Optional[inventorysourcefilter.InventorySourceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySourceFilter' }})
    parent_entity_filter: Optional[parententityfilter.ParentEntityFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentEntityFilter' }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerId' }})
    version: Optional[CreateSdfDownloadTaskRequestVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
