from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreateSheetsChartRequestLinkingModeEnum(str, Enum):
    NOT_LINKED_IMAGE = "NOT_LINKED_IMAGE"
    LINKED = "LINKED"


@dataclass_json
@dataclass
class CreateSheetsChartRequest:
    r"""CreateSheetsChartRequest
    Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
    """
    
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartId') }})
    element_properties: Optional[PageElementProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementProperties') }})
    linking_mode: Optional[CreateSheetsChartRequestLinkingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkingMode') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    
