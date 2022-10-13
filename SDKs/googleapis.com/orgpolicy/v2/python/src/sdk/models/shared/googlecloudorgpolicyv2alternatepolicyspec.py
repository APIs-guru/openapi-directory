from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudorgpolicyv2policyspec


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2AlternatePolicySpec:
    launch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launch' }})
    spec: Optional[googlecloudorgpolicyv2policyspec.GoogleCloudOrgpolicyV2PolicySpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
