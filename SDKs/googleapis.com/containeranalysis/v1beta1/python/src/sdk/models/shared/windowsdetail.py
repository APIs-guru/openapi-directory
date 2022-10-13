from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import knowledgebase


@dataclass_json
@dataclass
class WindowsDetail:
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpeUri' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fixing_kbs: Optional[List[knowledgebase.KnowledgeBase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixingKbs' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
