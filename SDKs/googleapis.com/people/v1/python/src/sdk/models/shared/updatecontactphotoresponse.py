from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import person


@dataclass_json
@dataclass
class UpdateContactPhotoResponse:
    person: Optional[person.Person] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    
