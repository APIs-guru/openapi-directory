from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class GoogleCloudDatacatalogV1EntryInput:
    r"""GoogleCloudDatacatalogV1EntryInput
    Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
    """
    
    business_context: Optional[GoogleCloudDatacatalogV1BusinessContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessContext') }})
    data_source: Optional[GoogleCloudDatacatalogV1DataSourceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    data_source_connection_spec: Optional[GoogleCloudDatacatalogV1DataSourceConnectionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceConnectionSpec') }})
    database_table_spec: Optional[GoogleCloudDatacatalogV1DatabaseTableSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseTableSpec') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    fileset_spec: Optional[GoogleCloudDatacatalogV1FilesetSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesetSpec') }})
    fully_qualified_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyQualifiedName') }})
    gcs_fileset_spec: Optional[GoogleCloudDatacatalogV1GcsFilesetSpecInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsFilesetSpec') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linked_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedResource') }})
    personal_details: Optional[GoogleCloudDatacatalogV1PersonalDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalDetails') }})
    routine_spec: Optional[GoogleCloudDatacatalogV1RoutineSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routineSpec') }})
    schema: Optional[GoogleCloudDatacatalogV1Schema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    source_system_timestamps: Optional[GoogleCloudDatacatalogV1SystemTimestampsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSystemTimestamps') }})
    type: Optional[GoogleCloudDatacatalogV1EntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage_signal: Optional[GoogleCloudDatacatalogV1UsageSignalInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageSignal') }})
    user_specified_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSpecifiedSystem') }})
    user_specified_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSpecifiedType') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1Entry:
    r"""GoogleCloudDatacatalogV1Entry
    Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
    """
    
    bigquery_date_sharded_spec: Optional[GoogleCloudDatacatalogV1BigQueryDateShardedSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDateShardedSpec') }})
    bigquery_table_spec: Optional[GoogleCloudDatacatalogV1BigQueryTableSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryTableSpec') }})
    business_context: Optional[GoogleCloudDatacatalogV1BusinessContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessContext') }})
    data_source: Optional[GoogleCloudDatacatalogV1DataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    data_source_connection_spec: Optional[GoogleCloudDatacatalogV1DataSourceConnectionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceConnectionSpec') }})
    database_table_spec: Optional[GoogleCloudDatacatalogV1DatabaseTableSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseTableSpec') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    fileset_spec: Optional[GoogleCloudDatacatalogV1FilesetSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesetSpec') }})
    fully_qualified_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyQualifiedName') }})
    gcs_fileset_spec: Optional[GoogleCloudDatacatalogV1GcsFilesetSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsFilesetSpec') }})
    integrated_system: Optional[GoogleCloudDatacatalogV1EntryIntegratedSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integratedSystem') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linked_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedResource') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    personal_details: Optional[GoogleCloudDatacatalogV1PersonalDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalDetails') }})
    routine_spec: Optional[GoogleCloudDatacatalogV1RoutineSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routineSpec') }})
    schema: Optional[GoogleCloudDatacatalogV1Schema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    source_system_timestamps: Optional[GoogleCloudDatacatalogV1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSystemTimestamps') }})
    type: Optional[GoogleCloudDatacatalogV1EntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage_signal: Optional[GoogleCloudDatacatalogV1UsageSignal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageSignal') }})
    user_specified_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSpecifiedSystem') }})
    user_specified_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSpecifiedType') }})
    
