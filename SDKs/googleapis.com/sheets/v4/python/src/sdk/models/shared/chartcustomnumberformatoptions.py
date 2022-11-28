from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChartCustomNumberFormatOptions:
    r"""ChartCustomNumberFormatOptions
    Custom number formatting options for chart attributes.
    """
    
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    
