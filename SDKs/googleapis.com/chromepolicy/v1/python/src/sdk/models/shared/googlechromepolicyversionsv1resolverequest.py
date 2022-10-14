from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1policytargetkey


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1ResolveRequest:
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    policy_schema_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policySchemaFilter' }})
    policy_target_key: Optional[googlechromepolicyversionsv1policytargetkey.GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTargetKey' }})
    
