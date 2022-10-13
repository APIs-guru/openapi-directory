from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import patientcarecontextlink


@dataclass_json
@dataclass
class PatientCareContextLinkRequest:
    link: patientcarecontextlink.PatientCareContextLink = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
