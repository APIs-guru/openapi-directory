from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import formatcomplexity
from . import file
from . import file


@dataclass_json
@dataclass
class Format:
    format_complexity: Optional[formatcomplexity.FormatComplexity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatComplexity' }})
    format_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatType' }})
    resources: Optional[List[file.File]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    root: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root' }})
    
