from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EncryptionConfig:
    r"""EncryptionConfig
    The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
    """
    
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    
