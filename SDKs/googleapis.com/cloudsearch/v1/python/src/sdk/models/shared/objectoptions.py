from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObjectOptions:
    r"""ObjectOptions
    The options for an object.
    """
    
    display_options: Optional[ObjectDisplayOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayOptions') }})
    freshness_options: Optional[FreshnessOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freshnessOptions') }})
    suggestion_filtering_operators: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestionFilteringOperators') }})
    
