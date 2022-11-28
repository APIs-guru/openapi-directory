from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddSheetRequest:
    r"""AddSheetRequest
    Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.
    """
    
    properties: Optional[SheetProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
