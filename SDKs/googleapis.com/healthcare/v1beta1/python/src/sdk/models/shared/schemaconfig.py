from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SchemaConfigSchemaTypeEnum(str, Enum):
    SCHEMA_TYPE_UNSPECIFIED = "SCHEMA_TYPE_UNSPECIFIED"
    LOSSLESS = "LOSSLESS"
    ANALYTICS = "ANALYTICS"
    ANALYTICS_V2 = "ANALYTICS_V2"


@dataclass_json
@dataclass
class SchemaConfig:
    r"""SchemaConfig
    Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
    """
    
    last_updated_partition_config: Optional[TimePartitioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedPartitionConfig') }})
    recursive_structure_depth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recursiveStructureDepth') }})
    schema_type: Optional[SchemaConfigSchemaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaType') }})
    
