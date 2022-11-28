from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EncryptionConfig:
    r"""EncryptionConfig
    Represents a custom encryption key configuration that can be applied to a resource. This will encrypt all disks in Virtual Machine.
    """
    
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    
