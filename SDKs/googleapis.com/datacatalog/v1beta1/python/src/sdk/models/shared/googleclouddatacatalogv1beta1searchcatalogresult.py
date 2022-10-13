from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum(str, Enum):
    SEARCH_RESULT_TYPE_UNSPECIFIED = "SEARCH_RESULT_TYPE_UNSPECIFIED"
    ENTRY = "ENTRY"
    TAG_TEMPLATE = "TAG_TEMPLATE"
    ENTRY_GROUP = "ENTRY_GROUP"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1SearchCatalogResult:
    linked_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedResource' }})
    modify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifyTime' }})
    relative_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeResourceName' }})
    search_result_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchResultSubtype' }})
    search_result_type: Optional[GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchResultType' }})
    
