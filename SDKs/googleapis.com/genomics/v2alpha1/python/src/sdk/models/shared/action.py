from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ActionFlagsEnum(str, Enum):
    FLAG_UNSPECIFIED = "FLAG_UNSPECIFIED"
    IGNORE_EXIT_STATUS = "IGNORE_EXIT_STATUS"
    RUN_IN_BACKGROUND = "RUN_IN_BACKGROUND"
    ALWAYS_RUN = "ALWAYS_RUN"
    ENABLE_FUSE = "ENABLE_FUSE"
    PUBLISH_EXPOSED_PORTS = "PUBLISH_EXPOSED_PORTS"
    DISABLE_IMAGE_PREFETCH = "DISABLE_IMAGE_PREFETCH"
    DISABLE_STANDARD_ERROR_CAPTURE = "DISABLE_STANDARD_ERROR_CAPTURE"
    BLOCK_EXTERNAL_NETWORK = "BLOCK_EXTERNAL_NETWORK"


@dataclass_json
@dataclass
class Action:
    r"""Action
    Specifies a single action that runs a Docker container.
    """
    
    commands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    credentials: Optional[Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    encrypted_environment: Optional[Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedEnvironment') }})
    entrypoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entrypoint') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    flags: Optional[List[ActionFlagsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mounts: Optional[List[Mount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mounts') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pid_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pidNamespace') }})
    port_mappings: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMappings') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
