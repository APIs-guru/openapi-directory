from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PublicKeyCredentialFormatEnum(str, Enum):
    UNSPECIFIED_PUBLIC_KEY_FORMAT = "UNSPECIFIED_PUBLIC_KEY_FORMAT"
    RSA_PEM = "RSA_PEM"
    RSA_X509_PEM = "RSA_X509_PEM"
    ES256_PEM = "ES256_PEM"
    ES256_X509_PEM = "ES256_X509_PEM"


@dataclass_json
@dataclass
class PublicKeyCredential:
    r"""PublicKeyCredential
    A public key format and data.
    """
    
    format: Optional[PublicKeyCredentialFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
