from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MapValue:
    r"""MapValue
    A map value.
    """
    
    fields: Optional[dict[str, Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
