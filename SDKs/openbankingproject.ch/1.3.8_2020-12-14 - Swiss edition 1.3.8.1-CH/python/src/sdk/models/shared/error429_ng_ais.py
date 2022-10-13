from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import tppmessage429_ais


@dataclass_json
@dataclass
class Error429NgAis:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    tpp_messages: Optional[List[tppmessage429_ais.TppMessage429Ais]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    
