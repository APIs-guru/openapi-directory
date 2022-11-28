from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SchedulingNodeAffinityOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    IN = "IN"
    NOT_IN = "NOT_IN"


@dataclass_json
@dataclass
class SchedulingNodeAffinity:
    r"""SchedulingNodeAffinity
    Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    operator: Optional[SchedulingNodeAffinityOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
