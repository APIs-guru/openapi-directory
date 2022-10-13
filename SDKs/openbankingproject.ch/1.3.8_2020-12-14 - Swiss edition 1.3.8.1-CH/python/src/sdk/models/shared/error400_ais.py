from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import messagecode400_ais_enum
from . import messagecode400_ais_enum


@dataclass_json
@dataclass
class Error400AisAdditionalErrors:
    code: messagecode400_ais_enum.MessageCode400AisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class Error400Ais:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    additional_errors: Optional[List[Error400AisAdditionalErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalErrors' }})
    code: messagecode400_ais_enum.MessageCode400AisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
