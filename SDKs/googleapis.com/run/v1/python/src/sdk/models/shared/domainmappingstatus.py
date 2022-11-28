from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DomainMappingStatus:
    r"""DomainMappingStatus
    The current state of the Domain Mapping.
    """
    
    conditions: Optional[List[GoogleCloudRunV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    mapped_route_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappedRouteName') }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    resource_records: Optional[List[ResourceRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRecords') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
