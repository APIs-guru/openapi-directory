from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CategoryInput:
    r"""CategoryInput
    A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class Category:
    r"""Category
    A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    more_hours_types: Optional[List[MoreHoursType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHoursTypes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_types: Optional[List[ServiceType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceTypes') }})
    
