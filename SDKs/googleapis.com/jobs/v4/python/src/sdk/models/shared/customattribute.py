from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomAttribute:
    r"""CustomAttribute
    Custom attribute values that are either filterable or non-filterable.
    """
    
    filterable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterable') }})
    keyword_searchable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordSearchable') }})
    long_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValues') }})
    string_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValues') }})
    
