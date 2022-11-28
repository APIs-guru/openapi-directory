from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIServiceOut:
    r"""APIServiceOut
    List of API Services
    """
    
    cost_in_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costInUnits') }})
    service_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceGroup') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
