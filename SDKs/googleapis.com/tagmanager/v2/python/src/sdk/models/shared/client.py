from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parameter


@dataclass_json
@dataclass
class Client:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    parameter: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFolderId' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag_manager_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagManagerUrl' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
