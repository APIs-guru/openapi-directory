from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetStatus:
    active_assets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeAssets' }})
    security_policy_applying_assets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityPolicyApplyingAssets' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
