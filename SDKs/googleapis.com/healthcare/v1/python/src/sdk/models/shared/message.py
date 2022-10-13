from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parseddata
from . import patientid
from . import schematizeddata


@dataclass_json
@dataclass
class Message:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    message_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parsed_data: Optional[parseddata.ParsedData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parsedData' }})
    patient_ids: Optional[List[patientid.PatientID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patientIds' }})
    schematized_data: Optional[schematizeddata.SchematizedData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schematizedData' }})
    send_facility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendFacility' }})
    send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendTime' }})
    
