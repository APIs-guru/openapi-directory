from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    An entity that can have metadata. For example, a Docker image.
    """
    
    content_hash: Optional[Hash] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHash') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
