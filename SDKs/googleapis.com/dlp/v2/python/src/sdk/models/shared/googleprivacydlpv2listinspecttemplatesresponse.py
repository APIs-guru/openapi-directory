from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListInspectTemplatesResponse:
    r"""GooglePrivacyDlpV2ListInspectTemplatesResponse
    Response message for ListInspectTemplates.
    """
    
    inspect_templates: Optional[List[GooglePrivacyDlpV2InspectTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectTemplates') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
