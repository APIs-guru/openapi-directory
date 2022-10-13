from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import secret
from . import secret
from . import mount


@dataclass_json
@dataclass
class Action:
    always_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alwaysRun' }})
    block_external_network: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockExternalNetwork' }})
    commands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commands' }})
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    credentials: Optional[secret.Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    disable_image_prefetch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableImagePrefetch' }})
    disable_standard_error_capture: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableStandardErrorCapture' }})
    enable_fuse: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableFuse' }})
    encrypted_environment: Optional[secret.Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedEnvironment' }})
    entrypoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entrypoint' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    ignore_exit_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreExitStatus' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    mounts: Optional[List[mount.Mount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mounts' }})
    pid_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pidNamespace' }})
    port_mappings: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portMappings' }})
    publish_exposed_ports: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishExposedPorts' }})
    run_in_background: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runInBackground' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
