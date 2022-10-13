from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import baseitemdto
from . import recommendationtype_enum


@dataclass_json
@dataclass
class RecommendationDto:
    baseline_item_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineItemName' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CategoryId' }})
    items: Optional[List[baseitemdto.BaseItemDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    recommendation_type: Optional[recommendationtype_enum.RecommendationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationType' }})
    
