from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Browsers:
    chrome: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chrome' }})
    firefox: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firefox' }})
    opera: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opera' }})
    
