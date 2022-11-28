from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenderInput:
    r"""GenderInput
    A person's gender.
    """
    
    address_me_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressMeAs') }})
    metadata: Optional[FieldMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Gender:
    r"""Gender
    A person's gender.
    """
    
    address_me_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressMeAs') }})
    formatted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedValue') }})
    metadata: Optional[FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
