from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attestorpublickey


@dataclass_json
@dataclass
class UserOwnedGrafeasNote:
    delegation_service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegationServiceAccountEmail' }})
    note_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noteReference' }})
    public_keys: Optional[List[attestorpublickey.AttestorPublicKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeys' }})
    
