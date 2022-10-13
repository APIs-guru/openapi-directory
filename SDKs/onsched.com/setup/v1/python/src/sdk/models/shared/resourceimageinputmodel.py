from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceImageInputModel:
    image_file_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageFileData' }})
    image_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageFileName' }})
    
