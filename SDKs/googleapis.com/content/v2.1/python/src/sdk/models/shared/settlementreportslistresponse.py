from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import settlementreport


@dataclass_json
@dataclass
class SettlementreportsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    resources: Optional[List[settlementreport.SettlementReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
