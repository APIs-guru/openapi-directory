from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationstatuscode
from . import qualification
from . import subactivity


@dataclass_json
@dataclass
class ApplicationList:
    cert_authority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cert_authority' }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    current_status: Optional[applicationstatuscode.ApplicationStatusCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_status' }})
    display_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_status' }})
    qualifications: Optional[List[qualification.Qualification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qualifications' }})
    removal_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removal_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subactivity: subactivity.Subactivity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subactivity' }})
    
