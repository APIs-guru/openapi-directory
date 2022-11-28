from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Annotation:
    r"""Annotation
    Text annotation with a set of attributes.
    """
    
    attributes: Optional[Attributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    description: Optional[TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
