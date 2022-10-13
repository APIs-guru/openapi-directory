from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datafeedstatusexample


@dataclass_json
@dataclass
class DatafeedStatusError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    examples: Optional[List[datafeedstatusexample.DatafeedStatusExample]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'examples' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
