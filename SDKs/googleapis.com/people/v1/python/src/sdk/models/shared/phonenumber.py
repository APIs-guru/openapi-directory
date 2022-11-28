from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PhoneNumberInput:
    r"""PhoneNumberInput
    A person's phone number.
    """
    
    metadata: Optional[FieldMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PhoneNumber:
    r"""PhoneNumber
    A person's phone number.
    """
    
    canonical_form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalForm') }})
    formatted_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedType') }})
    metadata: Optional[FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
