from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Residence:
    r"""Residence
    **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
    """
    
    current: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    metadata: Optional[FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ResidenceInput:
    r"""ResidenceInput
    **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
    """
    
    current: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    metadata: Optional[FieldMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
