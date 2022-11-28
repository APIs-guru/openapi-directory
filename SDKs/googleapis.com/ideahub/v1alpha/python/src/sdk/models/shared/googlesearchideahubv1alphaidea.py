from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1alphaIdea:
    r"""GoogleSearchIdeahubV1alphaIdea
    A single Idea that we want to show the end user.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    topics: Optional[List[GoogleSearchIdeahubV1alphaTopic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    
