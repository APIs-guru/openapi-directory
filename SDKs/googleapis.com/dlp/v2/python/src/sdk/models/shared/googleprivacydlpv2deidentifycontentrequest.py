from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeidentifyContentRequest:
    r"""GooglePrivacyDlpV2DeidentifyContentRequest
    Request to de-identify a ContentItem.
    """
    
    deidentify_config: Optional[GooglePrivacyDlpV2DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyConfig') }})
    deidentify_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyTemplateName') }})
    inspect_config: Optional[GooglePrivacyDlpV2InspectConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectConfig') }})
    inspect_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectTemplateName') }})
    item: Optional[GooglePrivacyDlpV2ContentItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    
