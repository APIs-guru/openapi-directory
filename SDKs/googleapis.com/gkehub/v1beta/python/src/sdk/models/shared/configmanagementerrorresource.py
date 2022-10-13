from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmanagementgroupversionkind


@dataclass_json
@dataclass
class ConfigManagementErrorResource:
    resource_gvk: Optional[configmanagementgroupversionkind.ConfigManagementGroupVersionKind] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGvk' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    resource_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceNamespace' }})
    source_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePath' }})
    
