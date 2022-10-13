from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataset


@dataclass_json
@dataclass
class ListDatasetsResponse:
    datasets: Optional[List[dataset.Dataset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
