from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import getcallresponse


@dataclass_json
@dataclass
class GetCallsResponseEmbedded:
    calls: Optional[List[getcallresponse.GetCallResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calls' }})
    

@dataclass_json
@dataclass
class GetCallsResponseLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetCallsResponseLinks:
    self: Optional[GetCallsResponseLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetCallsResponse:
    embedded: Optional[GetCallsResponseEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[GetCallsResponseLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    record_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record_index' }})
    
