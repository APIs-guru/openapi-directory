from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultDisplayLine:
    r"""ResultDisplayLine
    The collection of fields that make up a displayed line
    """
    
    fields: Optional[List[ResultDisplayField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
