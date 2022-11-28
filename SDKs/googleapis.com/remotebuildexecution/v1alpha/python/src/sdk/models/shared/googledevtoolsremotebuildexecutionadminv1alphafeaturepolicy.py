from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum(str, Enum):
    LINUX_ISOLATION_UNSPECIFIED = "LINUX_ISOLATION_UNSPECIFIED"
    GVISOR = "GVISOR"
    OFF = "OFF"

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum(str, Enum):
    VM_VERIFICATION_UNSPECIFIED = "VM_VERIFICATION_UNSPECIFIED"
    VM_VERIFICATION_GCP_TOKEN = "VM_VERIFICATION_GCP_TOKEN"
    VM_VERIFICATION_OFF = "VM_VERIFICATION_OFF"


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy
    FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
    """
    
    container_image_sources: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImageSources') }})
    docker_add_capabilities: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerAddCapabilities') }})
    docker_chroot_path: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerChrootPath') }})
    docker_network: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerNetwork') }})
    docker_privileged: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerPrivileged') }})
    docker_run_as_container_provided_user: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRunAsContainerProvidedUser') }})
    docker_run_as_root: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRunAsRoot') }})
    docker_runtime: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRuntime') }})
    docker_sibling_containers: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerSiblingContainers') }})
    linux_isolation: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxIsolation') }})
    vm_verification: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmVerification') }})
    
