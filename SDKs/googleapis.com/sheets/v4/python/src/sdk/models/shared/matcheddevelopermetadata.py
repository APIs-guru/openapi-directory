from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MatchedDeveloperMetadata:
    r"""MatchedDeveloperMetadata
    A developer metadata entry and the data filters specified in the original request that matched it.
    """
    
    data_filters: Optional[List[DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    developer_metadata: Optional[DeveloperMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    
