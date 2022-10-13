from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pathqueryoptions


@dataclass_json
@dataclass
class Options:
    include_only_targeted_user_lists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeOnlyTargetedUserLists' }})
    path_query_options: Optional[pathqueryoptions.PathQueryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathQueryOptions' }})
    
