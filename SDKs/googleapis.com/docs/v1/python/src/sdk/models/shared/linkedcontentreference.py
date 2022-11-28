from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LinkedContentReference:
    r"""LinkedContentReference
    A reference to the external linked source content.
    """
    
    sheets_chart_reference: Optional[SheetsChartReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetsChartReference') }})
    
