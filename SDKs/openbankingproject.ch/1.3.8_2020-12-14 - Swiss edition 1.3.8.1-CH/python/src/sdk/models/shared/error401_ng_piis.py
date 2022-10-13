from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import tppmessage401_piis


@dataclass_json
@dataclass
class Error401NgPiis:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    tpp_messages: Optional[List[tppmessage401_piis.TppMessage401Piis]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    
