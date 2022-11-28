from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddSlicerResponse:
    r"""AddSlicerResponse
    The result of adding a slicer to a spreadsheet.
    """
    
    slicer: Optional[Slicer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slicer') }})
    
