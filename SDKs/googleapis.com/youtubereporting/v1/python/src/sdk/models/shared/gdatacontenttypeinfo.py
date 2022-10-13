from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GdataContentTypeInfo:
    best_guess: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestGuess' }})
    from_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromBytes' }})
    from_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromFileName' }})
    from_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromHeader' }})
    from_url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromUrlPath' }})
    
