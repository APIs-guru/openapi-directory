from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OutdatedLibrary:
    learn_more_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnMoreUrls' }})
    library_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'libraryName' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
