from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tppmessagecategory_enum
from . import messagecode403_ais_enum


@dataclass_json
@dataclass
class TppMessage403Ais:
    category: tppmessagecategory_enum.TppMessageCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    code: messagecode403_ais_enum.MessageCode403AisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
