from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlere2


@dataclass_json
@dataclass
class RegexMatcher:
    google_re2: Optional[googlere2.GoogleRe2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleRe2' }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    
