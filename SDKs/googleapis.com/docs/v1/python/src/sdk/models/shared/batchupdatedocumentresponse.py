from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import response
from . import writecontrol


@dataclass_json
@dataclass
class BatchUpdateDocumentResponse:
    document_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentId' }})
    replies: Optional[List[response.Response]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    write_control: Optional[writecontrol.WriteControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeControl' }})
    
