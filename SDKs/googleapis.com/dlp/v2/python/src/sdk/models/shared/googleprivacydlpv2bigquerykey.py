from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2bigquerytable


@dataclass_json
@dataclass
class GooglePrivacyDlpV2BigQueryKey:
    row_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowNumber' }})
    table_reference: Optional[googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableReference' }})
    
