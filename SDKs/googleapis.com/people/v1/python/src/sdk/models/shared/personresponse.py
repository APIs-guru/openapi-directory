from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import person
from . import status


@dataclass_json
@dataclass
class PersonResponse:
    http_status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpStatusCode' }})
    person: Optional[person.Person] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    requested_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedResourceName' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
