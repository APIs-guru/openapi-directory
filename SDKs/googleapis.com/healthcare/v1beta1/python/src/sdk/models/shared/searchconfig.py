from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchparameter


@dataclass_json
@dataclass
class SearchConfig:
    search_parameters: Optional[List[searchparameter.SearchParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchParameters' }})
    
