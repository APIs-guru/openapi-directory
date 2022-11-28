from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CorsSettings:
    r"""CorsSettings
    The configuration for cors support
    """
    
    allow_credentials: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowCredentials') }})
    allow_headers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowHeaders') }})
    allow_methods: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMethods') }})
    allow_origin: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowOrigin') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    excluded_patterns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedPatterns') }})
    expose_headers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposeHeaders') }})
    max_age: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAge') }})
    
