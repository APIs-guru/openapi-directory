from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2deidentifytemplate


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateDeidentifyTemplateRequest:
    deidentify_template: Optional[googleprivacydlpv2deidentifytemplate.GooglePrivacyDlpV2DeidentifyTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentifyTemplate' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateId' }})
    
