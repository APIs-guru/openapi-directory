from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1schemaschemafield
from . import googleclouddataplexv1schemapartitionfield

class GoogleCloudDataplexV1SchemaPartitionStyleEnum(str, Enum):
    PARTITION_STYLE_UNSPECIFIED = "PARTITION_STYLE_UNSPECIFIED"
    HIVE_COMPATIBLE = "HIVE_COMPATIBLE"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Schema:
    fields: Optional[List[googleclouddataplexv1schemaschemafield.GoogleCloudDataplexV1SchemaSchemaField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    partition_fields: Optional[List[googleclouddataplexv1schemapartitionfield.GoogleCloudDataplexV1SchemaPartitionField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionFields' }})
    partition_style: Optional[GoogleCloudDataplexV1SchemaPartitionStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionStyle' }})
    user_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userManaged' }})
    
