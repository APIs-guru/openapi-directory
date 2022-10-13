from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupSnippet:
    published_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
