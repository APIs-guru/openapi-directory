from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserOwnedDrydockNote:
    r"""UserOwnedDrydockNote
    An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
    """
    
    delegation_service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegationServiceAccountEmail') }})
    note_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteReference') }})
    public_keys: Optional[List[AttestorPublicKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeys') }})
    

@dataclass_json
@dataclass
class UserOwnedDrydockNoteInput:
    r"""UserOwnedDrydockNoteInput
    An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
    """
    
    note_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteReference') }})
    public_keys: Optional[List[AttestorPublicKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeys') }})
    
