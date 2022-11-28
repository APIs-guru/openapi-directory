from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateInspectTemplateRequestInput:
    r"""GooglePrivacyDlpV2CreateInspectTemplateRequestInput
    Request message for CreateInspectTemplate.
    """
    
    inspect_template: Optional[GooglePrivacyDlpV2InspectTemplateInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectTemplate') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateId') }})
    
