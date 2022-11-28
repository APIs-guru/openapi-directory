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
class UpdateLinePropertiesRequest:
    r"""UpdateLinePropertiesRequest
    Updates the properties of a Line.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    line_properties: Optional[LineProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineProperties') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
