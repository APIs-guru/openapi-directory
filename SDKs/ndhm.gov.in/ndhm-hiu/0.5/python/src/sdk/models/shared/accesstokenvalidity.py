from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import patientauthpurpose_enum
from . import patientauthrequester


@dataclass_json
@dataclass
class AccessTokenValidity:
    expiry: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    purpose: patientauthpurpose_enum.PatientAuthPurposeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    requester: patientauthrequester.PatientAuthRequester = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requester' }})
    
