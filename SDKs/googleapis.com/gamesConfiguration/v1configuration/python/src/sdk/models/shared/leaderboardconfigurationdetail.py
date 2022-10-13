from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import localizedstringbundle
from . import gamesnumberformatconfiguration


@dataclass_json
@dataclass
class LeaderboardConfigurationDetail:
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconUrl' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[localizedstringbundle.LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    score_format: Optional[gamesnumberformatconfiguration.GamesNumberFormatConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreFormat' }})
    sort_rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortRank' }})
    
