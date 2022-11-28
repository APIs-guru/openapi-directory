from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttestationAuthority:
    r"""AttestationAuthority
    Note kind that represents a logical attestation \"role\" or \"authority\". For example, an organization might have one `AttestationAuthority` for \"QA\" and one for \"build\". This Note is intended to act strictly as a grouping mechanism for the attached Occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an Occurrence to a given Note. It also provides a single point of lookup to find all attached Attestation Occurrences, even if they don't all live in the same project.
    """
    
    hint: Optional[AttestationAuthorityHint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hint') }})
    
