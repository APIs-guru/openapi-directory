from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteConnectionRequest:
    r"""DeleteConnectionRequest
    Request to delete a private service access connection. The call will fail if there are any managed service instances using this connection.
    """
    
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerNetwork') }})
    
