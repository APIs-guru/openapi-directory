from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import groupcontentdetails
from . import errors
from . import groupsnippet


@dataclass_json
@dataclass
class Group:
    content_details: Optional[groupcontentdetails.GroupContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[groupsnippet.GroupSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
