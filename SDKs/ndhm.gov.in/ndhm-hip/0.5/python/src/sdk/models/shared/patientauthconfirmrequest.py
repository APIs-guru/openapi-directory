from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import patientdemographic


@dataclass_json
@dataclass
class PatientAuthConfirmRequestCredential:
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authCode' }})
    demographic: Optional[patientdemographic.PatientDemographic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demographic' }})
    

@dataclass_json
@dataclass
class PatientAuthConfirmRequest:
    credential: PatientAuthConfirmRequestCredential = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    
