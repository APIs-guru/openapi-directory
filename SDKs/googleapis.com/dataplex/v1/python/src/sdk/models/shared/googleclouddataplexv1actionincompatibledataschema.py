from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum(str, Enum):
    SCHEMA_CHANGE_UNSPECIFIED = "SCHEMA_CHANGE_UNSPECIFIED"
    INCOMPATIBLE = "INCOMPATIBLE"
    MODIFIED = "MODIFIED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ActionIncompatibleDataSchema:
    existing_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existingSchema' }})
    new_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSchema' }})
    sampled_data_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampledDataLocations' }})
    schema_change: Optional[GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaChange' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    
