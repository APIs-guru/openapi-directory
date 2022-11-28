from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum(str, Enum):
    SEARCH_RESULT_TYPE_UNSPECIFIED = "SEARCH_RESULT_TYPE_UNSPECIFIED"
    ENTRY = "ENTRY"
    TAG_TEMPLATE = "TAG_TEMPLATE"
    ENTRY_GROUP = "ENTRY_GROUP"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1SearchCatalogResult:
    r"""GoogleCloudDatacatalogV1beta1SearchCatalogResult
    A result that appears in the response of a search request. Each result captures details of one entry that matches the search.
    """
    
    linked_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedResource') }})
    modify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifyTime') }})
    relative_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeResourceName') }})
    search_result_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchResultSubtype') }})
    search_result_type: Optional[GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchResultType') }})
    
