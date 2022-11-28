from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnPremisesConfiguration:
    r"""OnPremisesConfiguration
    On-premises instance configuration.
    """
    
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificate') }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKey') }})
    dump_file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dumpFilePath') }})
    host_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostPort') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    source_instance: Optional[InstanceReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceInstance') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
