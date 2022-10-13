from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import quotaoverride


@dataclass_json
@dataclass
class OverrideInlineSource:
    overrides: Optional[List[quotaoverride.QuotaOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrides' }})
    
