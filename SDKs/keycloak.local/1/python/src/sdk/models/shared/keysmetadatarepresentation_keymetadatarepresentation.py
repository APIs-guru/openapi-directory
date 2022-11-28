from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeysMetadataRepresentationKeyMetadataRepresentation:
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    kid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kid') }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerId') }})
    provider_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerPriority') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
