from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import _embedded
from . import links


@dataclass_json
@dataclass
class Applications:
    embedded: _embedded.Embedded = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: links.Links = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    page_index: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_index' }})
    page_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    
