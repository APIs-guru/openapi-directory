from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1SchemaPartitionStyleEnum(str, Enum):
    PARTITION_STYLE_UNSPECIFIED = "PARTITION_STYLE_UNSPECIFIED"
    HIVE_COMPATIBLE = "HIVE_COMPATIBLE"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Schema:
    r"""GoogleCloudDataplexV1Schema
    Schema information describing the structure and layout of the data.
    """
    
    fields: Optional[List[GoogleCloudDataplexV1SchemaSchemaField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    partition_fields: Optional[List[GoogleCloudDataplexV1SchemaPartitionField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionFields') }})
    partition_style: Optional[GoogleCloudDataplexV1SchemaPartitionStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionStyle') }})
    user_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userManaged') }})
    
