from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDelegatesResponse:
    r"""ListDelegatesResponse
    Response for the ListDelegates method.
    """
    
    delegates: Optional[List[Delegate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegates') }})
    
