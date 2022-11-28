from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CaPoolTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    ENTERPRISE = "ENTERPRISE"
    DEVOPS = "DEVOPS"


@dataclass_json
@dataclass
class CaPoolInput:
    r"""CaPoolInput
    A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
    """
    
    issuance_policy: Optional[IssuancePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuancePolicy') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    publishing_options: Optional[PublishingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishingOptions') }})
    tier: Optional[CaPoolTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    

@dataclass_json
@dataclass
class CaPool:
    r"""CaPool
    A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
    """
    
    issuance_policy: Optional[IssuancePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuancePolicy') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    publishing_options: Optional[PublishingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishingOptions') }})
    tier: Optional[CaPoolTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    
