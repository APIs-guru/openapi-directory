from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListClustersResponse:
    r"""ListClustersResponse
    ListClustersResponse is the result of ListClustersRequest.
    """
    
    clusters: Optional[List[Cluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    missing_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missingZones') }})
    
