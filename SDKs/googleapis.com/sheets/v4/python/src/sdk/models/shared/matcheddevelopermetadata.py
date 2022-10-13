from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datafilter
from . import developermetadata


@dataclass_json
@dataclass
class MatchedDeveloperMetadata:
    data_filters: Optional[List[datafilter.DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFilters' }})
    developer_metadata: Optional[developermetadata.DeveloperMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerMetadata' }})
    
