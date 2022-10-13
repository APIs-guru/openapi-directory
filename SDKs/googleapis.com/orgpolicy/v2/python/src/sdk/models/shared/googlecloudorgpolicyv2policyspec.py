from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudorgpolicyv2policyspecpolicyrule


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2PolicySpec:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    inherit_from_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritFromParent' }})
    reset: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset' }})
    rules: Optional[List[googlecloudorgpolicyv2policyspecpolicyrule.GoogleCloudOrgpolicyV2PolicySpecPolicyRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
