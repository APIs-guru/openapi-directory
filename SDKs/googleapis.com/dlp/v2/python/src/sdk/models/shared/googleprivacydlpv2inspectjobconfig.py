from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectJobConfig:
    r"""GooglePrivacyDlpV2InspectJobConfig
    Controls what and how to inspect for findings.
    """
    
    actions: Optional[List[GooglePrivacyDlpV2Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    inspect_config: Optional[GooglePrivacyDlpV2InspectConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectConfig') }})
    inspect_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectTemplateName') }})
    storage_config: Optional[GooglePrivacyDlpV2StorageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageConfig') }})
    
