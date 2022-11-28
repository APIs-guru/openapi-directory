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
class BatchUpdatePhotosResponse:
    r"""BatchUpdatePhotosResponse
    Response to batch update of metadata of one or more Photos.
    """
    
    results: Optional[List[PhotoResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
