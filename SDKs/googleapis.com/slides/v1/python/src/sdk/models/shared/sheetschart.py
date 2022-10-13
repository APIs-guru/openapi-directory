from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sheetschartproperties


@dataclass_json
@dataclass
class SheetsChart:
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartId' }})
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUrl' }})
    sheets_chart_properties: Optional[sheetschartproperties.SheetsChartProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetsChartProperties' }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    
