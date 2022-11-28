from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EncryptionInfoEncryptionTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    GOOGLE_DEFAULT_ENCRYPTION = "GOOGLE_DEFAULT_ENCRYPTION"
    CUSTOMER_MANAGED_ENCRYPTION = "CUSTOMER_MANAGED_ENCRYPTION"


@dataclass_json
@dataclass
class EncryptionInfo:
    r"""EncryptionInfo
    Encryption information for a Cloud Spanner database or backup.
    """
    
    encryption_status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionStatus') }})
    encryption_type: Optional[EncryptionInfoEncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    kms_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyVersion') }})
    

@dataclass_json
@dataclass
class EncryptionInfoInput:
    r"""EncryptionInfoInput
    Encryption information for a Cloud Spanner database or backup.
    """
    
    encryption_status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionStatus') }})
    
