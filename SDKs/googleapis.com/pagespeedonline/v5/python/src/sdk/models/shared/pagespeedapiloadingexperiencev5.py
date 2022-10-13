from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userpageloadmetricv5


@dataclass_json
@dataclass
class PagespeedAPILoadingExperienceV5:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initial_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initial_url' }})
    metrics: Optional[dict[str, userpageloadmetricv5.UserPageLoadMetricV5]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    origin_fallback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin_fallback' }})
    overall_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overall_category' }})
    
