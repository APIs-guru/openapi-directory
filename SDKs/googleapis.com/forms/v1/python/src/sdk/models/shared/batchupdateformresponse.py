from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import form
from . import response
from . import writecontrol


@dataclass_json
@dataclass
class BatchUpdateFormResponse:
    form: Optional[form.Form] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    replies: Optional[List[response.Response]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    write_control: Optional[writecontrol.WriteControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeControl' }})
    
