from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1policytargetkey


@dataclass_json
@dataclass
class GoogleChromePolicyV1ResolveRequest:
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    policy_schema_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policySchemaFilter' }})
    policy_target_key: Optional[googlechromepolicyv1policytargetkey.GoogleChromePolicyV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTargetKey' }})
    
