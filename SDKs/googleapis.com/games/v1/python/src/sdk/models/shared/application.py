from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ApplicationEnabledFeaturesEnum(str, Enum):
    APPLICATION_FEATURE_UNSPECIFIED = "APPLICATION_FEATURE_UNSPECIFIED"
    SNAPSHOTS = "SNAPSHOTS"


@dataclass_json
@dataclass
class Application:
    r"""Application
    The Application resource.
    """
    
    achievement_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('achievement_count') }})
    assets: Optional[List[ImageAsset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    category: Optional[ApplicationCategory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled_features: Optional[List[ApplicationEnabledFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledFeatures') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instances: Optional[List[Instance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedTimestamp') }})
    leaderboard_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaderboard_count') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    theme_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themeColor') }})
    
