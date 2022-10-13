from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypeexpr
from . import googlecloudorgpolicyv2policyspecpolicyrulestringvalues


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2PolicySpecPolicyRule:
    allow_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowAll' }})
    condition: Optional[googletypeexpr.GoogleTypeExpr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    deny_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denyAll' }})
    enforce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforce' }})
    values: Optional[googlecloudorgpolicyv2policyspecpolicyrulestringvalues.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
