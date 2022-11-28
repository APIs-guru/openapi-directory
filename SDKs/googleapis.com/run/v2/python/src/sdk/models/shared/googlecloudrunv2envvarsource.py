from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2EnvVarSource:
    r"""GoogleCloudRunV2EnvVarSource
    EnvVarSource represents a source for the value of an EnvVar.
    """
    
    secret_key_ref: Optional[GoogleCloudRunV2SecretKeySelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKeyRef') }})
    
