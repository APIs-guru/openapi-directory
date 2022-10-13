from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import subject
from . import subjectaltnames


@dataclass_json
@dataclass
class SubjectConfig:
    subject: Optional[subject.Subject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    subject_alt_name: Optional[subjectaltnames.SubjectAltNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAltName' }})
    
