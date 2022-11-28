from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateAuthorityPolicy:
    r"""CertificateAuthorityPolicy
    The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.
    """
    
    allowed_common_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedCommonNames') }})
    allowed_config_list: Optional[AllowedConfigList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedConfigList') }})
    allowed_issuance_modes: Optional[IssuanceModes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIssuanceModes') }})
    allowed_locations_and_organizations: Optional[List[Subject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedLocationsAndOrganizations') }})
    allowed_sans: Optional[AllowedSubjectAltNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedSans') }})
    maximum_lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumLifetime') }})
    overwrite_config_values: Optional[ReusableConfigWrapper] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwriteConfigValues') }})
    
