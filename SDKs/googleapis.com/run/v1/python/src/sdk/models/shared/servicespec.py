from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceSpec:
    r"""ServiceSpec
    ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
    """
    
    template: Optional[RevisionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    traffic: Optional[List[TrafficTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    

@dataclass_json
@dataclass
class ServiceSpecInput:
    r"""ServiceSpecInput
    ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
    """
    
    template: Optional[RevisionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    traffic: Optional[List[TrafficTargetInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    
