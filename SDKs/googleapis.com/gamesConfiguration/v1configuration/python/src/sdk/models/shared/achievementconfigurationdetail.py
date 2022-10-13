from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import localizedstringbundle
from . import localizedstringbundle


@dataclass_json
@dataclass
class AchievementConfigurationDetail:
    description: Optional[localizedstringbundle.LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconUrl' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[localizedstringbundle.LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    point_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointValue' }})
    sort_rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortRank' }})
    
