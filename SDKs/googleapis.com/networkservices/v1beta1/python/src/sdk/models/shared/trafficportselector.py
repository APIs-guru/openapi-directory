from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrafficPortSelector:
    r"""TrafficPortSelector
    Specification of a port-based selector.
    """
    
    ports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
