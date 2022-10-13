from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature

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
    container_image_sources: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImageSources' }})
    docker_add_capabilities: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerAddCapabilities' }})
    docker_chroot_path: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerChrootPath' }})
    docker_network: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerNetwork' }})
    docker_privileged: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerPrivileged' }})
    docker_run_as_container_provided_user: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerRunAsContainerProvidedUser' }})
    docker_run_as_root: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerRunAsRoot' }})
    docker_runtime: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerRuntime' }})
    docker_sibling_containers: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerSiblingContainers' }})
    linux_isolation: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxIsolation' }})
    vm_verification: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmVerification' }})
    
