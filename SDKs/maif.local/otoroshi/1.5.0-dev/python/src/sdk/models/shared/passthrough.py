from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import verificationsettings


@dataclass_json
@dataclass
class PassThrough:
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    verification_settings: verificationsettings.VerificationSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationSettings' }})
    
