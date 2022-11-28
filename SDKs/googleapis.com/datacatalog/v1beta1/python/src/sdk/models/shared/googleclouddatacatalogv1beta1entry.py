from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudDatacatalogV1beta1Entry
    Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
    """
    
    bigquery_date_sharded_spec: Optional[GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDateShardedSpec') }})
    bigquery_table_spec: Optional[GoogleCloudDatacatalogV1beta1BigQueryTableSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryTableSpec') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gcs_fileset_spec: Optional[GoogleCloudDatacatalogV1beta1GcsFilesetSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsFilesetSpec') }})
    integrated_system: Optional[GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integratedSystem') }})
    linked_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedResource') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: Optional[GoogleCloudDatacatalogV1beta1Schema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    source_system_timestamps: Optional[GoogleCloudDatacatalogV1beta1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSystemTimestamps') }})
    type: Optional[GoogleCloudDatacatalogV1beta1EntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage_signal: Optional[GoogleCloudDatacatalogV1beta1UsageSignal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageSignal') }})
    user_specified_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSpecifiedSystem') }})
    user_specified_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSpecifiedType') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1EntryInput:
    r"""GoogleCloudDatacatalogV1beta1EntryInput
    Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gcs_fileset_spec: Optional[GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsFilesetSpec') }})
    linked_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedResource') }})
    schema: Optional[GoogleCloudDatacatalogV1beta1Schema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    source_system_timestamps: Optional[GoogleCloudDatacatalogV1beta1SystemTimestampsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSystemTimestamps') }})
    type: Optional[GoogleCloudDatacatalogV1beta1EntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage_signal: Optional[GoogleCloudDatacatalogV1beta1UsageSignal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageSignal') }})
    user_specified_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSpecifiedSystem') }})
    user_specified_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSpecifiedType') }})
    
