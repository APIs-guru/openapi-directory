from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KubernetesResourceInput:
    r"""KubernetesResourceInput
    KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
    """
    
    membership_cr_manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipCrManifest') }})
    resource_options: Optional[ResourceOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOptions') }})
    

@dataclass_json
@dataclass
class KubernetesResource:
    r"""KubernetesResource
    KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
    """
    
    connect_resources: Optional[List[ResourceManifest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectResources') }})
    membership_cr_manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipCrManifest') }})
    membership_resources: Optional[List[ResourceManifest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipResources') }})
    resource_options: Optional[ResourceOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOptions') }})
    
