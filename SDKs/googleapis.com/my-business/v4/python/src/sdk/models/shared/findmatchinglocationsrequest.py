from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FindMatchingLocationsRequest:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    max_cache_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxCacheDuration' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numResults' }})
    
