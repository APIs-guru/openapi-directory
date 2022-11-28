from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateServiceAccountKeyRequestKeyAlgorithmEnum(str, Enum):
    KEY_ALG_UNSPECIFIED = "KEY_ALG_UNSPECIFIED"
    KEY_ALG_RSA_1024 = "KEY_ALG_RSA_1024"
    KEY_ALG_RSA_2048 = "KEY_ALG_RSA_2048"

class CreateServiceAccountKeyRequestPrivateKeyTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TYPE_PKCS12_FILE = "TYPE_PKCS12_FILE"
    TYPE_GOOGLE_CREDENTIALS_FILE = "TYPE_GOOGLE_CREDENTIALS_FILE"


@dataclass_json
@dataclass
class CreateServiceAccountKeyRequest:
    r"""CreateServiceAccountKeyRequest
    The service account key create request.
    """
    
    key_algorithm: Optional[CreateServiceAccountKeyRequestKeyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyAlgorithm') }})
    private_key_type: Optional[CreateServiceAccountKeyRequestPrivateKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyType') }})
    
