from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import tppmessage400_ais


@dataclass_json
@dataclass
class Error400NgAis:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    tpp_messages: Optional[List[tppmessage400_ais.TppMessage400Ais]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    
