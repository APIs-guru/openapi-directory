from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attributes:
    r"""Attributes
    A container for all the attributes for a given location.
    """
    
    attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class AttributesInput:
    r"""AttributesInput
    A container for all the attributes for a given location.
    """
    
    attributes: Optional[List[AttributeInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
