from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CollectionSelector:
    r"""CollectionSelector
    A selection of a collection, such as `messages as m1`.
    """
    
    all_descendants: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allDescendants') }})
    collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionId') }})
    
