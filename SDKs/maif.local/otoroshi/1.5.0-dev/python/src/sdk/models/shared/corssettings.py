from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CorsSettings:
    allow_credentials: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCredentials' }})
    allow_headers: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowHeaders' }})
    allow_methods: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMethods' }})
    allow_origin: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowOrigin' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    excluded_patterns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedPatterns' }})
    expose_headers: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exposeHeaders' }})
    max_age: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAge' }})
    
