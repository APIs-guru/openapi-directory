from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentstyle


@dataclass_json
@dataclass
class UpdateDocumentStyleRequest:
    document_style: Optional[documentstyle.DocumentStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentStyle' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    
