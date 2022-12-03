from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Get200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    get_200_application_json_object: Optional[Get200ApplicationJSON] = field(default=None)
    
