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
class PhotoResponse:
    r"""PhotoResponse
    Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.
    """
    
    photo: Optional[Photo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
