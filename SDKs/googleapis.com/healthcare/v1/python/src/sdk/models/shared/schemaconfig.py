from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SchemaConfigSchemaTypeEnum(str, Enum):
    SCHEMA_TYPE_UNSPECIFIED = "SCHEMA_TYPE_UNSPECIFIED"
    ANALYTICS = "ANALYTICS"
    ANALYTICS_V2 = "ANALYTICS_V2"


@dataclass_json
@dataclass
class SchemaConfig:
    r"""SchemaConfig
    Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
    """
    
    recursive_structure_depth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recursiveStructureDepth') }})
    schema_type: Optional[SchemaConfigSchemaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaType') }})
    
