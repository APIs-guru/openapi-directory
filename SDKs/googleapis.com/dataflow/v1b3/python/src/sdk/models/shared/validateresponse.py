from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queryinfo


@dataclass_json
@dataclass
class ValidateResponse:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    query_info: Optional[queryinfo.QueryInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryInfo' }})
    
