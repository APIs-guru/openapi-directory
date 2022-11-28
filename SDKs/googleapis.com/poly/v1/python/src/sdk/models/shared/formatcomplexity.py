from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FormatComplexity:
    r"""FormatComplexity
    Information on the complexity of this Format.
    """
    
    lod_hint: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lodHint') }})
    triangle_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triangleCount') }})
    
