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
class UpdatePhotoRequestInput:
    r"""UpdatePhotoRequestInput
    Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.
    """
    
    photo: Optional[PhotoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
