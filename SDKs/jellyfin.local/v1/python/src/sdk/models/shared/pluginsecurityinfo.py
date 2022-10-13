from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PluginSecurityInfo:
    is_mb_supporter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsMbSupporter' }})
    supporter_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupporterKey' }})
    
