from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum(str, Enum):
    SCHEMA_CHANGE_UNSPECIFIED = "SCHEMA_CHANGE_UNSPECIFIED"
    INCOMPATIBLE = "INCOMPATIBLE"
    MODIFIED = "MODIFIED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ActionIncompatibleDataSchema:
    r"""GoogleCloudDataplexV1ActionIncompatibleDataSchema
    Action details for incompatible schemas detected by discovery.
    """
    
    existing_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingSchema') }})
    new_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSchema') }})
    sampled_data_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampledDataLocations') }})
    schema_change: Optional[GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaChange') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
