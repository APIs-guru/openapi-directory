from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CollectionSelector:
    all_descendants: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allDescendants' }})
    collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionId' }})
    
