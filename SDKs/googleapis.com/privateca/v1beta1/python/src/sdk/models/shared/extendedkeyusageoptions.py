from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExtendedKeyUsageOptions:
    r"""ExtendedKeyUsageOptions
    KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
    """
    
    client_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientAuth') }})
    code_signing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeSigning') }})
    email_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailProtection') }})
    ocsp_signing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ocspSigning') }})
    server_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverAuth') }})
    time_stamping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeStamping') }})
    
