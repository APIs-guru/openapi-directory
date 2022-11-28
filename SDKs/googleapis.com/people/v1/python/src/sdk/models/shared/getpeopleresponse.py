from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetPeopleResponse:
    r"""GetPeopleResponse
    The response to a get request for a list of people by resource name.
    """
    
    responses: Optional[List[PersonResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
