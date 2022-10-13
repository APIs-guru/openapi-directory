from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import x509certificatedetails

class PublicKeyCertificateFormatEnum(str, Enum):
    UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT"
    X509_CERTIFICATE_PEM = "X509_CERTIFICATE_PEM"


@dataclass_json
@dataclass
class PublicKeyCertificate:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    format: Optional[PublicKeyCertificateFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    x509_details: Optional[x509certificatedetails.X509CertificateDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x509Details' }})
    
