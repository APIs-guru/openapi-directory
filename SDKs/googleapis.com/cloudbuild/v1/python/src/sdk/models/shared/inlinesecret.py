from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InlineSecret:
    r"""InlineSecret
    Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.
    """
    
    env_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envMap') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    
