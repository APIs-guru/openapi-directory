from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SchemaConfigSchemaTypeEnum(str, Enum):
    SCHEMA_TYPE_UNSPECIFIED = "SCHEMA_TYPE_UNSPECIFIED"
    LOSSLESS = "LOSSLESS"
    ANALYTICS = "ANALYTICS"
    ANALYTICS_V2 = "ANALYTICS_V2"


@dataclass_json
@dataclass
class SchemaConfig:
    recursive_structure_depth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recursiveStructureDepth' }})
    schema_type: Optional[SchemaConfigSchemaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaType' }})
    
