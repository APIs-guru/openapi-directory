from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import meta
from . import syndicatemarshaller


@dataclass_json
@dataclass
class SyndicateMarshallerWrapped:
    callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[syndicatemarshaller.SyndicateMarshaller]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
