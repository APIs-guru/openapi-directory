from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput:
    r"""GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput
    Request message for CreateDeidentifyTemplate.
    """
    
    deidentify_template: Optional[GooglePrivacyDlpV2DeidentifyTemplateInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyTemplate') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateId') }})
    
