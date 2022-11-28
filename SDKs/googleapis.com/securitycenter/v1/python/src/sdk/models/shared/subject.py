from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SubjectKindEnum(str, Enum):
    AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"
    USER = "USER"
    SERVICEACCOUNT = "SERVICEACCOUNT"
    GROUP = "GROUP"


@dataclass_json
@dataclass
class Subject:
    r"""Subject
    Represents a Kubernetes Subject.
    """
    
    kind: Optional[SubjectKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ns') }})
    
