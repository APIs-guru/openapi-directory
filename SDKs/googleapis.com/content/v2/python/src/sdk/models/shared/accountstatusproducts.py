from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountstatusitemlevelissue
from . import accountstatusstatistics


@dataclass_json
@dataclass
class AccountStatusProducts:
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    item_level_issues: Optional[List[accountstatusitemlevelissue.AccountStatusItemLevelIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemLevelIssues' }})
    statistics: Optional[accountstatusstatistics.AccountStatusStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    
