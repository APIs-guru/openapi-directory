from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sheetschartreference


@dataclass_json
@dataclass
class LinkedContentReference:
    sheets_chart_reference: Optional[sheetschartreference.SheetsChartReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetsChartReference' }})
    
