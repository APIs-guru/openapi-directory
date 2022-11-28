from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Chain:
    r"""Chain
    A chain is a brand that your business's locations can be affiliated with.
    """
    
    chain_names: Optional[List[ChainName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chainNames') }})
    location_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationCount') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    websites: Optional[List[ChainURI]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    
