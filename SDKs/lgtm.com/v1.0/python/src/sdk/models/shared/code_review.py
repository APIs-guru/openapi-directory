from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CodeReviewStatusEnum(str, Enum):
    PENDING = "pending"
    FAILURE = "failure"
    SUCCESS = "success"


@dataclass_json
@dataclass
class CodeReview:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    languages: Optional[List[CodereviewLanguages]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    results_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results-url') }})
    status: Optional[CodeReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status-message') }})
    
