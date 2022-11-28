from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendationDto:
    baseline_item_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineItemName') }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CategoryId') }})
    items: Optional[List[BaseItemDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    recommendation_type: Optional[RecommendationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationType') }})
    
