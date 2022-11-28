from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InsertInlineSheetsChartResponse:
    r"""InsertInlineSheetsChartResponse
    The result of inserting an embedded Google Sheets chart.
    """
    
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
