from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2inspecttemplate


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListInspectTemplatesResponse:
    inspect_templates: Optional[List[googleprivacydlpv2inspecttemplate.GooglePrivacyDlpV2InspectTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectTemplates' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
