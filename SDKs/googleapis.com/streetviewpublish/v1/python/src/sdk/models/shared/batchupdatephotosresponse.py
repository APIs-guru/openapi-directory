from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import photoresponse


@dataclass_json
@dataclass
class BatchUpdatePhotosResponse:
    results: Optional[List[photoresponse.PhotoResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
