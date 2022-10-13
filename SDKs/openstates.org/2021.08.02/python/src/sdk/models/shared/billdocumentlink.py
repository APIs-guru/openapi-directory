from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BillDocumentLink:
    media_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
