from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridOptions:
    r"""GooglePrivacyDlpV2HybridOptions
    Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    required_finding_label_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredFindingLabelKeys') }})
    table_options: Optional[GooglePrivacyDlpV2TableOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableOptions') }})
    
