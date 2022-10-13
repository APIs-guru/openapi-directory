from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import labelfield


@dataclass_json
@dataclass
class Label:
    fields: Optional[dict[str, labelfield.LabelField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
