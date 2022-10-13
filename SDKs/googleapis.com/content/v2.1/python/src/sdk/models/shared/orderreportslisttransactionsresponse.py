from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderreporttransaction


@dataclass_json
@dataclass
class OrderreportsListTransactionsResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    transactions: Optional[List[orderreporttransaction.OrderReportTransaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
