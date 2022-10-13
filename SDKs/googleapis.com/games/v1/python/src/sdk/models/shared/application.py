from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import imageasset
from . import applicationcategory
from . import instance

class ApplicationEnabledFeaturesEnum(str, Enum):
    APPLICATION_FEATURE_UNSPECIFIED = "APPLICATION_FEATURE_UNSPECIFIED"
    SNAPSHOTS = "SNAPSHOTS"


@dataclass_json
@dataclass
class Application:
    achievement_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'achievement_count' }})
    assets: Optional[List[imageasset.ImageAsset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    category: Optional[applicationcategory.ApplicationCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enabled_features: Optional[List[ApplicationEnabledFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledFeatures' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instances: Optional[List[instance.Instance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTimestamp' }})
    leaderboard_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaderboard_count' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    theme_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'themeColor' }})
    
