from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filteroptions
from . import source


@dataclass_json
@dataclass
class DataSourceRestriction:
    filter_options: Optional[List[filteroptions.FilterOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterOptions' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
