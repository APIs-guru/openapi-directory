from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FieldReference:
    r"""FieldReference
    A reference to a field in a document, ex: `stats.operations`.
    """
    
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPath') }})
    
