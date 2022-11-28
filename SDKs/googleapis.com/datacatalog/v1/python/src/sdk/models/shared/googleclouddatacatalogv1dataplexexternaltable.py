from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum(str, Enum):
    INTEGRATED_SYSTEM_UNSPECIFIED = "INTEGRATED_SYSTEM_UNSPECIFIED"
    BIGQUERY = "BIGQUERY"
    CLOUD_PUBSUB = "CLOUD_PUBSUB"
    DATAPROC_METASTORE = "DATAPROC_METASTORE"
    DATAPLEX = "DATAPLEX"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataplexExternalTable:
    r"""GoogleCloudDatacatalogV1DataplexExternalTable
    External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them \"external tables\". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.
    """
    
    data_catalog_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCatalogEntry') }})
    fully_qualified_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyQualifiedName') }})
    google_cloud_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleCloudResource') }})
    system: Optional[GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    
