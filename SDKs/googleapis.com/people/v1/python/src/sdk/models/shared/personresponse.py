from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PersonResponse:
    r"""PersonResponse
    The response for a single person
    """
    
    http_status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatusCode') }})
    person: Optional[Person] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    requested_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedResourceName') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
