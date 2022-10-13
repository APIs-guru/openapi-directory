from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import embeddedobject


@dataclass_json
@dataclass
class InlineObjectProperties:
    embedded_object: Optional[embeddedobject.EmbeddedObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embeddedObject' }})
    
