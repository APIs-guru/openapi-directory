from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import substringmatchcriteria

class ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum(str, Enum):
    NOT_LINKED_IMAGE = "NOT_LINKED_IMAGE"
    LINKED = "LINKED"


@dataclass_json
@dataclass
class ReplaceAllShapesWithSheetsChartRequest:
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartId' }})
    contains_text: Optional[substringmatchcriteria.SubstringMatchCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containsText' }})
    linking_mode: Optional[ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkingMode' }})
    page_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageObjectIds' }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    
