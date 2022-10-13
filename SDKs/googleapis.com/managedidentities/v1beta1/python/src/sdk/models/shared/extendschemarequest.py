from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExtendSchemaRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    file_contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileContents' }})
    gcs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsPath' }})
    
