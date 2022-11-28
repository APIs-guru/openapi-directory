from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchDomainsResponse:
    r"""SearchDomainsResponse
    Response for the `SearchDomains` method.
    """
    
    register_parameters: Optional[List[RegisterParameters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registerParameters') }})
    
