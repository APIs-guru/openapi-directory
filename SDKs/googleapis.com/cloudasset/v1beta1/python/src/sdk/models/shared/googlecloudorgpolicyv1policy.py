from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudorgpolicyv1booleanpolicy
from . import googlecloudorgpolicyv1listpolicy


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV1Policy:
    boolean_policy: Optional[googlecloudorgpolicyv1booleanpolicy.GoogleCloudOrgpolicyV1BooleanPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanPolicy' }})
    constraint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraint' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    list_policy: Optional[googlecloudorgpolicyv1listpolicy.GoogleCloudOrgpolicyV1ListPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listPolicy' }})
    restore_default: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreDefault' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
