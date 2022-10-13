from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filterlist
from . import filterlist


@dataclass_json
@dataclass
class InfoTypeConfig:
    evaluate_list: Optional[filterlist.FilterList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluateList' }})
    ignore_list: Optional[filterlist.FilterList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreList' }})
    strict_matching: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strictMatching' }})
    
