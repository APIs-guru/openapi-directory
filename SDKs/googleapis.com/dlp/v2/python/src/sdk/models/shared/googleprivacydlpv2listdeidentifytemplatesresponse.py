from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2deidentifytemplate


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListDeidentifyTemplatesResponse:
    deidentify_templates: Optional[List[googleprivacydlpv2deidentifytemplate.GooglePrivacyDlpV2DeidentifyTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentifyTemplates' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
