from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CertificateRepresentation:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    kid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kid') }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    
