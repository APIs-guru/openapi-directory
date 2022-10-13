from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import debugoptions
from . import schema


@dataclass_json
@dataclass
class UpdateSchemaRequest:
    debug_options: Optional[debugoptions.DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugOptions' }})
    schema: Optional[schema.Schema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
