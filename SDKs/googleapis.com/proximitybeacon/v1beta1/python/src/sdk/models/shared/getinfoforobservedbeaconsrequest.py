from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetInfoForObservedBeaconsRequest:
    r"""GetInfoForObservedBeaconsRequest
    Request for beacon and attachment information about beacons that a mobile client has encountered \"in the wild\".
    """
    
    namespaced_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespacedTypes') }})
    observations: Optional[List[Observation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observations') }})
    
