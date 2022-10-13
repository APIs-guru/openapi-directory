from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MultiClusterIngressFeatureSpecBillingEnum(str, Enum):
    BILLING_UNSPECIFIED = "BILLING_UNSPECIFIED"
    PAY_AS_YOU_GO = "PAY_AS_YOU_GO"
    ANTHOS_LICENSE = "ANTHOS_LICENSE"


@dataclass_json
@dataclass
class MultiClusterIngressFeatureSpec:
    billing: Optional[MultiClusterIngressFeatureSpecBillingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing' }})
    config_membership: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configMembership' }})
    
