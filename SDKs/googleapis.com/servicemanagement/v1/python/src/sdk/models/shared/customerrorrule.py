from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomErrorRule:
    r"""CustomErrorRule
    A custom error rule.
    """
    
    is_error_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isErrorType') }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    
