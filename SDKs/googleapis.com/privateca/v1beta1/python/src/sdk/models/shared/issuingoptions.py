from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IssuingOptions:
    r"""IssuingOptions
    Options that affect all certificates issued by a CertificateAuthority.
    """
    
    include_ca_cert_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeCaCertUrl') }})
    include_crl_access_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeCrlAccessUrl') }})
    
