from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPRouteQueryParameterMatch:
    exact_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactMatch' }})
    present_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presentMatch' }})
    query_parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameter' }})
    regex_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regexMatch' }})
    
