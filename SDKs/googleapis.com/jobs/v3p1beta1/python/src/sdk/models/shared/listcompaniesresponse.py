from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import company
from . import responsemetadata


@dataclass_json
@dataclass
class ListCompaniesResponse:
    companies: Optional[List[company.Company]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companies' }})
    metadata: Optional[responsemetadata.ResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
