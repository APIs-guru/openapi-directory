from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import regexmatcher


@dataclass_json
@dataclass
class StringMatcher:
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exact' }})
    ignore_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreCase' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    safe_regex: Optional[regexmatcher.RegexMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safeRegex' }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    
