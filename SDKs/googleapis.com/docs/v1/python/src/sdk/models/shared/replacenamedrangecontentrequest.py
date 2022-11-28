from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplaceNamedRangeContentRequest:
    r"""ReplaceNamedRangeContentRequest
    Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.
    """
    
    named_range_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRangeId') }})
    named_range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRangeName') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
