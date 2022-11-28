from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Consumer:
    r"""Consumer
    Contains information of the customer's network configurations.
    """
    
    endpoint_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUri') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    

@dataclass_json
@dataclass
class ConsumerInput:
    r"""ConsumerInput
    Contains information of the customer's network configurations.
    """
    
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    
