from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCustomClassesResponse:
    r"""ListCustomClassesResponse
    Message returned to the client by the `ListCustomClasses` method.
    """
    
    custom_classes: Optional[List[CustomClass]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClasses') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
