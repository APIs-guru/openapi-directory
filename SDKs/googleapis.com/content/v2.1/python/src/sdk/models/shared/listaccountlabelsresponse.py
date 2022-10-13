from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountlabel


@dataclass_json
@dataclass
class ListAccountLabelsResponse:
    account_labels: Optional[List[accountlabel.AccountLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountLabels' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
