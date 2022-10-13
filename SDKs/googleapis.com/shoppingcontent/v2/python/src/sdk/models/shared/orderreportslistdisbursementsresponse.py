from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderreportdisbursement


@dataclass_json
@dataclass
class OrderreportsListDisbursementsResponse:
    disbursements: Optional[List[orderreportdisbursement.OrderReportDisbursement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursements' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
