from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubjectConfig:
    r"""SubjectConfig
    These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
    """
    
    subject: Optional[Subject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    subject_alt_name: Optional[SubjectAltNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAltName') }})
    
