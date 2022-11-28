from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSlidesPositionRequest:
    r"""UpdateSlidesPositionRequest
    Updates the position of slides in the presentation.
    """
    
    insertion_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionIndex') }})
    slide_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slideObjectIds') }})
    
