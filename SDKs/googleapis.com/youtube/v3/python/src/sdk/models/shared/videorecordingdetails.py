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
class VideoRecordingDetails:
    r"""VideoRecordingDetails
    Recording information associated with the video.
    """
    
    location: Optional[GeoPoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationDescription') }})
    recording_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
