from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatafeedStatusError:
    r"""DatafeedStatusError
    An error occurring in the feed, like \"invalid price\".
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    examples: Optional[List[DatafeedStatusExample]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('examples') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
