from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PublicKeyCredentialFormatEnum(str, Enum):
    UNSPECIFIED_PUBLIC_KEY_FORMAT = "UNSPECIFIED_PUBLIC_KEY_FORMAT"
    RSA_PEM = "RSA_PEM"
    RSA_X509_PEM = "RSA_X509_PEM"
    ES256_PEM = "ES256_PEM"
    ES256_X509_PEM = "ES256_X509_PEM"


@dataclass_json
@dataclass
class PublicKeyCredential:
    format: Optional[PublicKeyCredentialFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
