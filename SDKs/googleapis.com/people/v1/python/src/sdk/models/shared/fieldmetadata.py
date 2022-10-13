from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import source


@dataclass_json
@dataclass
class FieldMetadata:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePrimary' }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
