from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IssuanceModes:
    r"""IssuanceModes
    IssuanceModes specifies the allowed ways in which Certificates may be requested from this CertificateAuthority.
    """
    
    allow_config_based_issuance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowConfigBasedIssuance') }})
    allow_csr_based_issuance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowCsrBasedIssuance') }})
    
