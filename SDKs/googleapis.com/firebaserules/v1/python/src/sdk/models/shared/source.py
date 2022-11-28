from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Source:
    r"""Source
    `Source` is one or more `File` messages comprising a logical set of rules.
    """
    
    files: Optional[List[File]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    
