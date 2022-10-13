from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import schema


@dataclass_json
@dataclass
class ValidateSchemaRequest:
    schema: Optional[schema.Schema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    
