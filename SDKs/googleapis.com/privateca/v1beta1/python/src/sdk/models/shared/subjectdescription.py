from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubjectDescription:
    r"""SubjectDescription
    These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
    """
    
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    hex_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hexSerialNumber') }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    not_after_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notAfterTime') }})
    not_before_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notBeforeTime') }})
    subject: Optional[Subject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    subject_alt_name: Optional[SubjectAltNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAltName') }})
    
