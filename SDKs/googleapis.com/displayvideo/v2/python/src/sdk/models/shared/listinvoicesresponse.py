from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import invoice


@dataclass_json
@dataclass
class ListInvoicesResponse:
    invoices: Optional[List[invoice.Invoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoices' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
