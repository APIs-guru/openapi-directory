from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSfdcInstance:
    auth_config_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authConfigId' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_authority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAuthority' }})
    sfdc_org_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sfdcOrgId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
