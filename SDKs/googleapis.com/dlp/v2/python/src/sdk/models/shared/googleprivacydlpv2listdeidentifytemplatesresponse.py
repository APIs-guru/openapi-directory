from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListDeidentifyTemplatesResponse:
    r"""GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
    Response message for ListDeidentifyTemplates.
    """
    
    deidentify_templates: Optional[List[GooglePrivacyDlpV2DeidentifyTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyTemplates') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
