from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EmbeddedObjectPosition:
    r"""EmbeddedObjectPosition
    The position of an embedded object such as a chart.
    """
    
    new_sheet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSheet') }})
    overlay_position: Optional[OverlayPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlayPosition') }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
