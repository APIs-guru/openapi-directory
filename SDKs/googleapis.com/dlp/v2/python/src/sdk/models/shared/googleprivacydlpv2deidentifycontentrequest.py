from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2deidentifyconfig
from . import googleprivacydlpv2inspectconfig
from . import googleprivacydlpv2contentitem


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeidentifyContentRequest:
    deidentify_config: Optional[googleprivacydlpv2deidentifyconfig.GooglePrivacyDlpV2DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentifyConfig' }})
    deidentify_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentifyTemplateName' }})
    inspect_config: Optional[googleprivacydlpv2inspectconfig.GooglePrivacyDlpV2InspectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectConfig' }})
    inspect_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectTemplateName' }})
    item: Optional[googleprivacydlpv2contentitem.GooglePrivacyDlpV2ContentItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    
