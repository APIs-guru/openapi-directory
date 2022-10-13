from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderdocument


@dataclass_json
@dataclass
class OrderDocumentsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    order_documents: Optional[List[orderdocument.OrderDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderDocuments' }})
    
