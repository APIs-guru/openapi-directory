from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddSheetResponse:
    r"""AddSheetResponse
    The result of adding a sheet.
    """
    
    properties: Optional[SheetProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
