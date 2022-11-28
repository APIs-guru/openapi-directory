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
class UpdateParagraphStyleRequest:
    r"""UpdateParagraphStyleRequest
    Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.
    """
    
    cell_location: Optional[TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellLocation') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    style: Optional[ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    text_range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textRange') }})
    
