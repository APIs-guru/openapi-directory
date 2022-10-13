from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TableOptions:
    identifying_fields: Optional[List[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifyingFields' }})
    
