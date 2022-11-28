from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrivateConnectivity:
    r"""PrivateConnectivity
    Private Connectivity
    """
    
    private_connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateConnection') }})
    
