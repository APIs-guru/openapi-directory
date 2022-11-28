from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchConfig:
    r"""SearchConfig
    Contains the configuration for FHIR search.
    """
    
    search_parameters: Optional[List[SearchParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchParameters') }})
    
