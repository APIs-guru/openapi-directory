from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CollectionOverride:
    r"""CollectionOverride
    CollectionOverride allows resource handling overrides for specific resources within a BaseType
    """
    
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
