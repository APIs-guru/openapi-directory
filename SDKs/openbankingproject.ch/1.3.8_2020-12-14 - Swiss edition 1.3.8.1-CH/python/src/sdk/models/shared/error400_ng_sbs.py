from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import tppmessage400_sbs


@dataclass_json
@dataclass
class Error400NgSbs:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    tpp_messages: Optional[List[tppmessage400_sbs.TppMessage400Sbs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    
