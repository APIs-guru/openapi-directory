from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PositionedObjectProperties:
    r"""PositionedObjectProperties
    Properties of a PositionedObject.
    """
    
    embedded_object: Optional[EmbeddedObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddedObject') }})
    positioning: Optional[PositionedObjectPositioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positioning') }})
    
