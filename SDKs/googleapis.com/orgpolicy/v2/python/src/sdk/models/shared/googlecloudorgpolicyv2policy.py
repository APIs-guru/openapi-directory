from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudorgpolicyv2alternatepolicyspec
from . import googlecloudorgpolicyv2policyspec


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2Policy:
    alternate: Optional[googlecloudorgpolicyv2alternatepolicyspec.GoogleCloudOrgpolicyV2AlternatePolicySpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    spec: Optional[googlecloudorgpolicyv2policyspec.GoogleCloudOrgpolicyV2PolicySpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
