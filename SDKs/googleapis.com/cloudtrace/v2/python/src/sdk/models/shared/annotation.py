from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributes
from . import truncatablestring


@dataclass_json
@dataclass
class Annotation:
    attributes: Optional[attributes.Attributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    description: Optional[truncatablestring.TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
