from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchUpdatePhotosRequestInput:
    r"""BatchUpdatePhotosRequestInput
    Request to update the metadata of photos. Updating the pixels of photos is not supported.
    """
    
    update_photo_requests: Optional[List[UpdatePhotoRequestInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatePhotoRequests') }})
    
