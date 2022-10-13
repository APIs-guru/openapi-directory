from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import tppmessage403_sbs


@dataclass_json
@dataclass
class Error403NgSbs:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    tpp_messages: Optional[List[tppmessage403_sbs.TppMessage403Sbs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    
