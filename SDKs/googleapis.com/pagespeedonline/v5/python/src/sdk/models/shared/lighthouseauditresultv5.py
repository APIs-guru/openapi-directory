from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LighthouseAuditResultV5:
    r"""LighthouseAuditResultV5
    An audit's result object in a Lighthouse result.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayValue') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    numeric_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericUnit') }})
    numeric_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericValue') }})
    score: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    score_display_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreDisplayMode') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    warnings: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
