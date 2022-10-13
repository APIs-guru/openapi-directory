from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import embeddedobject
from . import positionedobjectpositioning


@dataclass_json
@dataclass
class PositionedObjectProperties:
    embedded_object: Optional[embeddedobject.EmbeddedObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embeddedObject' }})
    positioning: Optional[positionedobjectpositioning.PositionedObjectPositioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positioning' }})
    
