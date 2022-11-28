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
class UpdateContactPhotoResponse:
    r"""UpdateContactPhotoResponse
    The response for updating a contact's photo.
    """
    
    person: Optional[Person] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    
