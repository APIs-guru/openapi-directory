from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import messagecode403_piis_enum
from . import messagecode403_piis_enum


@dataclass_json
@dataclass
class Error403PiisAdditionalErrors:
    code: messagecode403_piis_enum.MessageCode403PiisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class Error403Piis:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    additional_errors: Optional[List[Error403PiisAdditionalErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalErrors' }})
    code: messagecode403_piis_enum.MessageCode403PiisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
