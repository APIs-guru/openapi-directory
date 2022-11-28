from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttestationNote:
    r"""AttestationNote
    Note kind that represents a logical attestation \"role\" or \"authority\". For example, an organization might have one `Authority` for \"QA\" and one for \"build\". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project.
    """
    
    hint: Optional[Hint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hint') }})
    
