from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import tppmessage404_piis


@dataclass_json
@dataclass
class Error404NgPiis:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    tpp_messages: Optional[List[tppmessage404_piis.TppMessage404Piis]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    
