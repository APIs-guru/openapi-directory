from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import structureddataobject


@dataclass_json
@dataclass
class ItemStructuredData:
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    object: Optional[structureddataobject.StructuredDataObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
