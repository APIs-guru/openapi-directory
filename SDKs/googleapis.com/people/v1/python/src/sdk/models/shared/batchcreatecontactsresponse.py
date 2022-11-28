from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreateContactsResponse:
    r"""BatchCreateContactsResponse
    If not successful, returns BatchCreateContactsErrorDetails which contains a list of errors for each invalid contact. The response to a request to create a batch of contacts.
    """
    
    created_people: Optional[List[PersonResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdPeople') }})
    
