from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attributes:
    r"""Attributes
    A set of attributes as key-value pairs.
    """
    
    attribute_map: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeMap') }})
    dropped_attributes_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedAttributesCount') }})
    
