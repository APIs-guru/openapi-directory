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
class UpdateImagePropertiesRequest:
    r"""UpdateImagePropertiesRequest
    Update the properties of an Image.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    image_properties: Optional[ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageProperties') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
