from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import issuancemodes
from . import allowedkeytype
from . import x509parameters
from . import certificateidentityconstraints
from . import certificateextensionconstraints


@dataclass_json
@dataclass
class IssuancePolicy:
    allowed_issuance_modes: Optional[issuancemodes.IssuanceModes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIssuanceModes' }})
    allowed_key_types: Optional[List[allowedkeytype.AllowedKeyType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedKeyTypes' }})
    baseline_values: Optional[x509parameters.X509Parameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baselineValues' }})
    identity_constraints: Optional[certificateidentityconstraints.CertificateIdentityConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityConstraints' }})
    maximum_lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumLifetime' }})
    passthrough_extensions: Optional[certificateextensionconstraints.CertificateExtensionConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passthroughExtensions' }})
    
