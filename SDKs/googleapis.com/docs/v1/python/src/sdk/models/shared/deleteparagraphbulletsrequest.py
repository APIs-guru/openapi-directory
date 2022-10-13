from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import range


@dataclass_json
@dataclass
class DeleteParagraphBulletsRequest:
    range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
