from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import hsalgosettings
from . import rsalgosettings
from . import esalgosettings
from . import jwksalgosettings
from . import transformsettings
from . import verificationsettings


@dataclass_json
@dataclass
class Transform:
    algo_settings: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algoSettings' }})
    transform_settings: Optional[transformsettings.TransformSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformSettings' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    verification_settings: verificationsettings.VerificationSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationSettings' }})
    
