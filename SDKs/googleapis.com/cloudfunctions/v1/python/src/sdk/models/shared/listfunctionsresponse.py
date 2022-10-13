from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudfunction


@dataclass_json
@dataclass
class ListFunctionsResponse:
    functions: Optional[List[cloudfunction.CloudFunction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
