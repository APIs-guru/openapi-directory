from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1inputconfig


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Dataset:
    blocking_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockingResources' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    data_item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataItemCount' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    input_configs: Optional[List[googleclouddatalabelingv1beta1inputconfig.GoogleCloudDatalabelingV1beta1InputConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfigs' }})
    last_migrate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastMigrateTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
