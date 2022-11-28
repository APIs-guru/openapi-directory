from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SecretEnvSource:
    r"""SecretEnvSource
    Not supported by Cloud Run SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
    """
    
    local_object_reference: Optional[LocalObjectReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localObjectReference') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optional') }})
    
