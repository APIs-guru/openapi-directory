from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateBordersRequest:
    r"""UpdateBordersRequest
    Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.
    """
    
    bottom: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    inner_horizontal: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('innerHorizontal') }})
    inner_vertical: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('innerVertical') }})
    left: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    right: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    top: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    
