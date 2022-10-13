from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigManagementConfigSyncVersion:
    admission_webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admissionWebhook' }})
    git_sync: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitSync' }})
    importer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importer' }})
    monitor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    reconciler_manager: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconcilerManager' }})
    root_reconciler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootReconciler' }})
    syncer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncer' }})
    
