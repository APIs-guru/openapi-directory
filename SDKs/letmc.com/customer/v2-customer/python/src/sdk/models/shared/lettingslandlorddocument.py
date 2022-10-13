from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LettingsLandlordDocument:
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileName' }})
    file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSize' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MIMEType' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Note' }})
    
