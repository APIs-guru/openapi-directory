from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import options


@dataclass_json
@dataclass
class CollectionOverride:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    
