from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MessageInput:
    r"""MessageInput
    A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    message_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parsed_data: Optional[ParsedData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parsedData') }})
    patient_ids: Optional[List[PatientID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patientIds') }})
    schematized_data: Optional[SchematizedData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schematizedData') }})
    send_facility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendFacility') }})
    send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendTime') }})
    

@dataclass_json
@dataclass
class Message:
    r"""Message
    A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    message_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parsed_data: Optional[ParsedData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parsedData') }})
    patient_ids: Optional[List[PatientID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patientIds') }})
    schematized_data: Optional[SchematizedData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schematizedData') }})
    send_facility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendFacility') }})
    send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendTime') }})
    
