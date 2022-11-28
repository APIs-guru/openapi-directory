from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Options:
    r"""Options
    Additional query options.
    """
    
    include_only_targeted_user_lists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeOnlyTargetedUserLists') }})
    path_query_options: Optional[PathQueryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathQueryOptions') }})
    
