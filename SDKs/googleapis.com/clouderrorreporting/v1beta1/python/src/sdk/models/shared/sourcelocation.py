from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceLocation:
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionName' }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineNumber' }})
    
