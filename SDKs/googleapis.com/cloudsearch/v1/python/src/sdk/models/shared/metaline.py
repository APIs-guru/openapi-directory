from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metaline:
    r"""Metaline
    A metaline is a list of properties that are displayed along with the search result to provide context.
    """
    
    properties: Optional[List[DisplayedProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
