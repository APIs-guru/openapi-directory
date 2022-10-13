from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2color
from . import googleprivacydlpv2selectedinfotypes


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ImageTransformation:
    all_info_types: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allInfoTypes' }})
    all_text: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allText' }})
    redaction_color: Optional[googleprivacydlpv2color.GooglePrivacyDlpV2Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactionColor' }})
    selected_info_types: Optional[googleprivacydlpv2selectedinfotypes.GooglePrivacyDlpV2SelectedInfoTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedInfoTypes' }})
    
