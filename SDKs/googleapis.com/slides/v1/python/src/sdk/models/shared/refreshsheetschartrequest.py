from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RefreshSheetsChartRequest:
    r"""RefreshSheetsChartRequest
    Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
    """
    
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
