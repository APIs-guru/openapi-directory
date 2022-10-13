from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1bigquerydateshardedspec
from . import googleclouddatacatalogv1beta1bigquerytablespec
from . import googleclouddatacatalogv1beta1gcsfilesetspec
from . import googleclouddatacatalogv1beta1schema
from . import googleclouddatacatalogv1beta1systemtimestamps
from . import googleclouddatacatalogv1beta1usagesignal

class GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum(str, Enum):
    INTEGRATED_SYSTEM_UNSPECIFIED = "INTEGRATED_SYSTEM_UNSPECIFIED"
    BIGQUERY = "BIGQUERY"
    CLOUD_PUBSUB = "CLOUD_PUBSUB"

class GoogleCloudDatacatalogV1beta1EntryTypeEnum(str, Enum):
    ENTRY_TYPE_UNSPECIFIED = "ENTRY_TYPE_UNSPECIFIED"
    TABLE = "TABLE"
    MODEL = "MODEL"
    DATA_STREAM = "DATA_STREAM"
    FILESET = "FILESET"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1Entry:
    bigquery_date_sharded_spec: Optional[googleclouddatacatalogv1beta1bigquerydateshardedspec.GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDateShardedSpec' }})
    bigquery_table_spec: Optional[googleclouddatacatalogv1beta1bigquerytablespec.GoogleCloudDatacatalogV1beta1BigQueryTableSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryTableSpec' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    gcs_fileset_spec: Optional[googleclouddatacatalogv1beta1gcsfilesetspec.GoogleCloudDatacatalogV1beta1GcsFilesetSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsFilesetSpec' }})
    integrated_system: Optional[GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integratedSystem' }})
    linked_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedResource' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema: Optional[googleclouddatacatalogv1beta1schema.GoogleCloudDatacatalogV1beta1Schema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    source_system_timestamps: Optional[googleclouddatacatalogv1beta1systemtimestamps.GoogleCloudDatacatalogV1beta1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceSystemTimestamps' }})
    type: Optional[GoogleCloudDatacatalogV1beta1EntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    usage_signal: Optional[googleclouddatacatalogv1beta1usagesignal.GoogleCloudDatacatalogV1beta1UsageSignal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageSignal' }})
    user_specified_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSpecifiedSystem' }})
    user_specified_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSpecifiedType' }})
    
