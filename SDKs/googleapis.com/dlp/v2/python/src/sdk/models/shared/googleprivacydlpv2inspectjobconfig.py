from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2action
from . import googleprivacydlpv2inspectconfig
from . import googleprivacydlpv2storageconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectJobConfig:
    actions: Optional[List[googleprivacydlpv2action.GooglePrivacyDlpV2Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    inspect_config: Optional[googleprivacydlpv2inspectconfig.GooglePrivacyDlpV2InspectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectConfig' }})
    inspect_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectTemplateName' }})
    storage_config: Optional[googleprivacydlpv2storageconfig.GooglePrivacyDlpV2StorageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageConfig' }})
    
