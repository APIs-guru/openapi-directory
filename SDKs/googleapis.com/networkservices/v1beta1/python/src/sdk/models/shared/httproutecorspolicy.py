from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPRouteCorsPolicy:
    allow_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCredentials' }})
    allow_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowHeaders' }})
    allow_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMethods' }})
    allow_origin_regexes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowOriginRegexes' }})
    allow_origins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowOrigins' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exposeHeaders' }})
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAge' }})
    
