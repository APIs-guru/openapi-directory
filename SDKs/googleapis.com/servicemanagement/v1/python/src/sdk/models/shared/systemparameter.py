from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SystemParameter:
    http_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpHeader' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url_query_parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlQueryParameter' }})
    
