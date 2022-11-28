from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CopySheetToAnotherSpreadsheetRequest:
    r"""CopySheetToAnotherSpreadsheetRequest
    The request to copy a sheet across spreadsheets.
    """
    
    destination_spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationSpreadsheetId') }})
    
