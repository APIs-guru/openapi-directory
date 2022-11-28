from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Identity:
    r"""Identity
    The unique identifier of the update.
    """
    
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    update_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateId') }})
    
