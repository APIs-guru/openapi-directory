from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import geopoint


@dataclass_json
@dataclass
class VideoRecordingDetails:
    location: Optional[geopoint.GeoPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    location_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationDescription' }})
    recording_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
