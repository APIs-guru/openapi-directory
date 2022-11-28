from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SheetsChart:
    r"""SheetsChart
    A PageElement kind representing a linked chart embedded from Google Sheets.
    """
    
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartId') }})
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUrl') }})
    sheets_chart_properties: Optional[SheetsChartProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetsChartProperties') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    
