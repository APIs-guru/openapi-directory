from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlelongrunningoperation


@dataclass_json
@dataclass
class GoogleLongrunningListOperationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    operations: Optional[List[googlelongrunningoperation.GoogleLongrunningOperation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    
