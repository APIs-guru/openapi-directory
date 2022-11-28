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
class UpdateVideoPropertiesRequest:
    r"""UpdateVideoPropertiesRequest
    Update the properties of a Video.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    video_properties: Optional[VideoProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoProperties') }})
    
