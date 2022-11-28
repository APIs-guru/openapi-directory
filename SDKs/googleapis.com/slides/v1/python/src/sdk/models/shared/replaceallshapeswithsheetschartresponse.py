from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplaceAllShapesWithSheetsChartResponse:
    r"""ReplaceAllShapesWithSheetsChartResponse
    The result of replacing shapes with a Google Sheets chart.
    """
    
    occurrences_changed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrencesChanged') }})
    
