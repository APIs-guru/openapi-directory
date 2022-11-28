from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BaseType:
    r"""BaseType
    BaseType that describes a service-backed Type.
    """
    
    collection_overrides: Optional[List[CollectionOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionOverrides') }})
    credential: Optional[Credential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    descriptor_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptorUrl') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
