from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchChainsResponse:
    r"""SearchChainsResponse
    Response message for Locations.SearchChains.
    """
    
    chains: Optional[List[Chain]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chains') }})
    
