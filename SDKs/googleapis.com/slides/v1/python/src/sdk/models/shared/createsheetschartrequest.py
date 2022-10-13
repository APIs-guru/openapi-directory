from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pageelementproperties

class CreateSheetsChartRequestLinkingModeEnum(str, Enum):
    NOT_LINKED_IMAGE = "NOT_LINKED_IMAGE"
    LINKED = "LINKED"


@dataclass_json
@dataclass
class CreateSheetsChartRequest:
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartId' }})
    element_properties: Optional[pageelementproperties.PageElementProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elementProperties' }})
    linking_mode: Optional[CreateSheetsChartRequestLinkingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkingMode' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    
