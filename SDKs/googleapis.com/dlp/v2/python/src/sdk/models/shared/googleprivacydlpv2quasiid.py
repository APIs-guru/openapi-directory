from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2infotype


@dataclass_json
@dataclass
class GooglePrivacyDlpV2QuasiID:
    custom_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customTag' }})
    field: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    inferred: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inferred' }})
    info_type: Optional[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoType' }})
    
