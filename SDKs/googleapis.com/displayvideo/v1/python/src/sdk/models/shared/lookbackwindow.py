from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LookbackWindow:
    r"""LookbackWindow
    Specifies how many days into the past to look when determining whether to record a conversion.
    """
    
    click_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickDays') }})
    impression_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionDays') }})
    
