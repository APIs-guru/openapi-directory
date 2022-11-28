from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IssuancePolicy:
    r"""IssuancePolicy
    Defines controls over all certificate issuance within a CaPool.
    """
    
    allowed_issuance_modes: Optional[IssuanceModes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIssuanceModes') }})
    allowed_key_types: Optional[List[AllowedKeyType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedKeyTypes') }})
    baseline_values: Optional[X509Parameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselineValues') }})
    identity_constraints: Optional[CertificateIdentityConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityConstraints') }})
    maximum_lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumLifetime') }})
    passthrough_extensions: Optional[CertificateExtensionConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passthroughExtensions') }})
    
