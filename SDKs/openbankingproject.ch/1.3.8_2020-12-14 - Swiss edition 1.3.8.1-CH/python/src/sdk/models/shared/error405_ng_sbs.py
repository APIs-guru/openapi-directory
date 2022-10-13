from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import tppmessage405_sbs


@dataclass_json
@dataclass
class Error405NgSbs:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    tpp_messages: Optional[List[tppmessage405_sbs.TppMessage405Sbs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    
