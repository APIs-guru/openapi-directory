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
class UpdateSlicerSpecRequest:
    r"""UpdateSlicerSpecRequest
    Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    slicer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slicerId') }})
    spec: Optional[SlicerSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
