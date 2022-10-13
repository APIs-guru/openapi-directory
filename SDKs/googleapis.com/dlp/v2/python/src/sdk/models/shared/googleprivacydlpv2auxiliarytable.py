from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2quasiidfield
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2bigquerytable


@dataclass_json
@dataclass
class GooglePrivacyDlpV2AuxiliaryTable:
    quasi_ids: Optional[List[googleprivacydlpv2quasiidfield.GooglePrivacyDlpV2QuasiIDField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quasiIds' }})
    relative_frequency: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeFrequency' }})
    table: Optional[googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    
