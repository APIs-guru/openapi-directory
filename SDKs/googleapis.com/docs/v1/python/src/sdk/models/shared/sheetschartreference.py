from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SheetsChartReference:
    r"""SheetsChartReference
    A reference to a linked chart embedded from Google Sheets.
    """
    
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartId') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    
