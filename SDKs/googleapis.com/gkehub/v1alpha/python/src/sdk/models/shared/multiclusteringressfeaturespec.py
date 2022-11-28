from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MultiClusterIngressFeatureSpecBillingEnum(str, Enum):
    BILLING_UNSPECIFIED = "BILLING_UNSPECIFIED"
    PAY_AS_YOU_GO = "PAY_AS_YOU_GO"
    ANTHOS_LICENSE = "ANTHOS_LICENSE"


@dataclass_json
@dataclass
class MultiClusterIngressFeatureSpec:
    r"""MultiClusterIngressFeatureSpec
    **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
    """
    
    billing: Optional[MultiClusterIngressFeatureSpecBillingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing') }})
    config_membership: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMembership') }})
    
