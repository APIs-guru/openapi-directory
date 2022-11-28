from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1betaIdea:
    r"""GoogleSearchIdeahubV1betaIdea
    A single Idea that we want to show the end user.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    topics: Optional[List[GoogleSearchIdeahubV1betaTopic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    
