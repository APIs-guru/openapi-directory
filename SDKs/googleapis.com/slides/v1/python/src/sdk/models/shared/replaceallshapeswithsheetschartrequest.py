from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum(str, Enum):
    NOT_LINKED_IMAGE = "NOT_LINKED_IMAGE"
    LINKED = "LINKED"


@dataclass_json
@dataclass
class ReplaceAllShapesWithSheetsChartRequest:
    r"""ReplaceAllShapesWithSheetsChartRequest
    Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
    """
    
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartId') }})
    contains_text: Optional[SubstringMatchCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsText') }})
    linking_mode: Optional[ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkingMode') }})
    page_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageObjectIds') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    
