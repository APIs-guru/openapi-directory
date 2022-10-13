from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid


@dataclass_json
@dataclass
class GooglePrivacyDlpV2QuasiIdentifierField:
    custom_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customTag' }})
    field: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    
