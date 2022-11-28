from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Secret:
    r"""Secret
    Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.
    """
    
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    secret_env: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretEnv') }})
    
