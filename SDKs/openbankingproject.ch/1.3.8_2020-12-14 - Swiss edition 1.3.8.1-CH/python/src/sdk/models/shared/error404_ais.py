from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import messagecode404_ais_enum
from . import messagecode404_ais_enum


@dataclass_json
@dataclass
class Error404AisAdditionalErrors:
    code: messagecode404_ais_enum.MessageCode404AisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class Error404Ais:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    additional_errors: Optional[List[Error404AisAdditionalErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalErrors' }})
    code: messagecode404_ais_enum.MessageCode404AisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
