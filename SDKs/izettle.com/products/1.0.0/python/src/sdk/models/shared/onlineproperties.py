from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import presentation
from . import searchengineoptimization
from . import shipping

class OnlinePropertiesStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    HIDDEN = "HIDDEN"


@dataclass_json
@dataclass
class OnlineProperties:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    presentation: Optional[presentation.Presentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presentation' }})
    seo: Optional[searchengineoptimization.SearchEngineOptimization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seo' }})
    shipping: Optional[shipping.Shipping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping' }})
    status: OnlinePropertiesStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
