from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatevaluesbydatafilterresponse


@dataclass_json
@dataclass
class BatchUpdateValuesByDataFilterResponse:
    responses: Optional[List[updatevaluesbydatafilterresponse.UpdateValuesByDataFilterResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetId' }})
    total_updated_cells: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalUpdatedCells' }})
    total_updated_columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalUpdatedColumns' }})
    total_updated_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalUpdatedRows' }})
    total_updated_sheets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalUpdatedSheets' }})
    
