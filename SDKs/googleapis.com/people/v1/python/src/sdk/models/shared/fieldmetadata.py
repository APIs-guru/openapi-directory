from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FieldMetadata:
    r"""FieldMetadata
    Metadata about a field.
    """
    
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePrimary') }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    

@dataclass_json
@dataclass
class FieldMetadataInput:
    r"""FieldMetadataInput
    Metadata about a field.
    """
    
    source: Optional[SourceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePrimary') }})
    
