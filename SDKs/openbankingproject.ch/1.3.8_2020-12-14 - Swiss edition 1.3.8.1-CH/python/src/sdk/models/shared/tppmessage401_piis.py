from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tppmessagecategory_enum
from . import messagecode401_piis_enum


@dataclass_json
@dataclass
class TppMessage401Piis:
    category: tppmessagecategory_enum.TppMessageCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    code: messagecode401_piis_enum.MessageCode401PiisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
