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
    Update the styling of all paragraphs that overlap with the given range.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    paragraph_style: Optional[ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphStyle') }})
    range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
