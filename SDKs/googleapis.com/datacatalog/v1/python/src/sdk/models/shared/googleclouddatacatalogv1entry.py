from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1bigquerydateshardedspec
from . import googleclouddatacatalogv1bigquerytablespec
from . import googleclouddatacatalogv1businesscontext
from . import googleclouddatacatalogv1datasource
from . import googleclouddatacatalogv1datasourceconnectionspec
from . import googleclouddatacatalogv1databasetablespec
from . import googleclouddatacatalogv1filesetspec
from . import googleclouddatacatalogv1gcsfilesetspec
from . import googleclouddatacatalogv1personaldetails
from . import googleclouddatacatalogv1routinespec
from . import googleclouddatacatalogv1schema
from . import googleclouddatacatalogv1systemtimestamps
from . import googleclouddatacatalogv1usagesignal

class GoogleCloudDatacatalogV1EntryIntegratedSystemEnum(str, Enum):
    INTEGRATED_SYSTEM_UNSPECIFIED = "INTEGRATED_SYSTEM_UNSPECIFIED"
    BIGQUERY = "BIGQUERY"
    CLOUD_PUBSUB = "CLOUD_PUBSUB"
    DATAPROC_METASTORE = "DATAPROC_METASTORE"
    DATAPLEX = "DATAPLEX"

class GoogleCloudDatacatalogV1EntryTypeEnum(str, Enum):
    ENTRY_TYPE_UNSPECIFIED = "ENTRY_TYPE_UNSPECIFIED"
    TABLE = "TABLE"
    MODEL = "MODEL"
    DATA_STREAM = "DATA_STREAM"
    FILESET = "FILESET"
    CLUSTER = "CLUSTER"
    DATABASE = "DATABASE"
    DATA_SOURCE_CONNECTION = "DATA_SOURCE_CONNECTION"
    ROUTINE = "ROUTINE"
    LAKE = "LAKE"
    ZONE = "ZONE"
    SERVICE = "SERVICE"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1Entry:
    bigquery_date_sharded_spec: Optional[googleclouddatacatalogv1bigquerydateshardedspec.GoogleCloudDatacatalogV1BigQueryDateShardedSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDateShardedSpec' }})
    bigquery_table_spec: Optional[googleclouddatacatalogv1bigquerytablespec.GoogleCloudDatacatalogV1BigQueryTableSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryTableSpec' }})
    business_context: Optional[googleclouddatacatalogv1businesscontext.GoogleCloudDatacatalogV1BusinessContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessContext' }})
    data_source: Optional[googleclouddatacatalogv1datasource.GoogleCloudDatacatalogV1DataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    data_source_connection_spec: Optional[googleclouddatacatalogv1datasourceconnectionspec.GoogleCloudDatacatalogV1DataSourceConnectionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceConnectionSpec' }})
    database_table_spec: Optional[googleclouddatacatalogv1databasetablespec.GoogleCloudDatacatalogV1DatabaseTableSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseTableSpec' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    fileset_spec: Optional[googleclouddatacatalogv1filesetspec.GoogleCloudDatacatalogV1FilesetSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesetSpec' }})
    fully_qualified_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullyQualifiedName' }})
    gcs_fileset_spec: Optional[googleclouddatacatalogv1gcsfilesetspec.GoogleCloudDatacatalogV1GcsFilesetSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsFilesetSpec' }})
    integrated_system: Optional[GoogleCloudDatacatalogV1EntryIntegratedSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integratedSystem' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    linked_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedResource' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    personal_details: Optional[googleclouddatacatalogv1personaldetails.GoogleCloudDatacatalogV1PersonalDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalDetails' }})
    routine_spec: Optional[googleclouddatacatalogv1routinespec.GoogleCloudDatacatalogV1RoutineSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routineSpec' }})
    schema: Optional[googleclouddatacatalogv1schema.GoogleCloudDatacatalogV1Schema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    source_system_timestamps: Optional[googleclouddatacatalogv1systemtimestamps.GoogleCloudDatacatalogV1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceSystemTimestamps' }})
    type: Optional[GoogleCloudDatacatalogV1EntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    usage_signal: Optional[googleclouddatacatalogv1usagesignal.GoogleCloudDatacatalogV1UsageSignal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageSignal' }})
    user_specified_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSpecifiedSystem' }})
    user_specified_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSpecifiedType' }})
    
