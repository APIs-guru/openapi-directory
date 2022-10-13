from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPCookieEvidence:
    cookie_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieNames' }})
    max_cookie_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxCookieCount' }})
    
