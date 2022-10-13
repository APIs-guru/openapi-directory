from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import subject
from . import subjectaltnames


@dataclass_json
@dataclass
class SubjectDescription:
    hex_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hexSerialNumber' }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetime' }})
    not_after_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notAfterTime' }})
    not_before_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notBeforeTime' }})
    subject: Optional[subject.Subject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    subject_alt_name: Optional[subjectaltnames.SubjectAltNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAltName' }})
    
