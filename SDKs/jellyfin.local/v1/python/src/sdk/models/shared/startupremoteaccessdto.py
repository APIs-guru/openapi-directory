from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartupRemoteAccessDto:
    r"""StartupRemoteAccessDto
    Startup remote access dto.
    """
    
    enable_automatic_port_mapping: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableAutomaticPortMapping') }})
    enable_remote_access: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableRemoteAccess') }})
    
