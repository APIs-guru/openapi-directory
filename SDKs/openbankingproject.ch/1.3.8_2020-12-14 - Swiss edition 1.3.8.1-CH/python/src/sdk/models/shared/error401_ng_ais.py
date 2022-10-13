from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import tppmessage401_ais


@dataclass_json
@dataclass
class Error401NgAis:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    tpp_messages: Optional[List[tppmessage401_ais.TppMessage401Ais]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    
