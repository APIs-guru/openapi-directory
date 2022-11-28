from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Policy:
    r"""Policy
    A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
    """
    
    alternative_name_server_config: Optional[PolicyAlternativeNameServerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeNameServerConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enable_inbound_forwarding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableInboundForwarding') }})
    enable_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableLogging') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networks: Optional[List[PolicyNetwork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    
