from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2inspecttemplate


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateInspectTemplateRequest:
    inspect_template: Optional[googleprivacydlpv2inspecttemplate.GooglePrivacyDlpV2InspectTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectTemplate' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateId' }})
    
