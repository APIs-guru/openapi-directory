from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2row


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Table:
    headers: Optional[List[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    rows: Optional[List[googleprivacydlpv2row.GooglePrivacyDlpV2Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
