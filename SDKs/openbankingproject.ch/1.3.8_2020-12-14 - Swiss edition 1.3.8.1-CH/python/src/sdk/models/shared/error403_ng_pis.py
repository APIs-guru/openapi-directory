from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import tppmessage403_pis


@dataclass_json
@dataclass
class Error403NgPis:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    tpp_messages: Optional[List[tppmessage403_pis.TppMessage403Pis]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    
