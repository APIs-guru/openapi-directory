from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnitReactionsAnalyticsResponse:
    feedback: Optional[UnitReactionsFeedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    page_id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageId') }})
    
