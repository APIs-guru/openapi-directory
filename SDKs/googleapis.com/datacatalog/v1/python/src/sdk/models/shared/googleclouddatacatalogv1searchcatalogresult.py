from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum(str, Enum):
    INTEGRATED_SYSTEM_UNSPECIFIED = "INTEGRATED_SYSTEM_UNSPECIFIED"
    BIGQUERY = "BIGQUERY"
    CLOUD_PUBSUB = "CLOUD_PUBSUB"
    DATAPROC_METASTORE = "DATAPROC_METASTORE"
    DATAPLEX = "DATAPLEX"

class GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum(str, Enum):
    SEARCH_RESULT_TYPE_UNSPECIFIED = "SEARCH_RESULT_TYPE_UNSPECIFIED"
    ENTRY = "ENTRY"
    TAG_TEMPLATE = "TAG_TEMPLATE"
    ENTRY_GROUP = "ENTRY_GROUP"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1SearchCatalogResult:
    r"""GoogleCloudDatacatalogV1SearchCatalogResult
    Result in the response to a search request. Each result captures details of one entry that matches the search.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    fully_qualified_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyQualifiedName') }})
    integrated_system: Optional[GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integratedSystem') }})
    linked_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedResource') }})
    modify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifyTime') }})
    relative_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeResourceName') }})
    search_result_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchResultSubtype') }})
    search_result_type: Optional[GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchResultType') }})
    user_specified_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSpecifiedSystem') }})
    
