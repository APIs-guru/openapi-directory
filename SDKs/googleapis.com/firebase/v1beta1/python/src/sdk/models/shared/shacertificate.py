from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ShaCertificateCertTypeEnum(str, Enum):
    SHA_CERTIFICATE_TYPE_UNSPECIFIED = "SHA_CERTIFICATE_TYPE_UNSPECIFIED"
    SHA_1 = "SHA_1"
    SHA_256 = "SHA_256"


@dataclass_json
@dataclass
class ShaCertificate:
    r"""ShaCertificate
    A SHA-1 or SHA-256 certificate associated with the AndroidApp.
    """
    
    cert_type: Optional[ShaCertificateCertTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sha_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shaHash') }})
    
