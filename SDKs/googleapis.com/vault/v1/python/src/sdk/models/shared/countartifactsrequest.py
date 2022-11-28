from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CountArtifactsRequestViewEnum(str, Enum):
    COUNT_RESULT_VIEW_UNSPECIFIED = "COUNT_RESULT_VIEW_UNSPECIFIED"
    TOTAL_COUNT = "TOTAL_COUNT"
    ALL = "ALL"


@dataclass_json
@dataclass
class CountArtifactsRequest:
    r"""CountArtifactsRequest
    Count artifacts request.
    """
    
    query: Optional[Query] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    view: Optional[CountArtifactsRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
