from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SecretManagerSecret:
    r"""SecretManagerSecret
    Pairs a secret environment variable with a SecretVersion in Secret Manager.
    """
    
    env: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionName') }})
    
