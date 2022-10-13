from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import messagecode409_pis_enum
from . import messagecode409_pis_enum


@dataclass_json
@dataclass
class Error409PisAdditionalErrors:
    code: messagecode409_pis_enum.MessageCode409PisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class Error409Pis:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    additional_errors: Optional[List[Error409PisAdditionalErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalErrors' }})
    code: messagecode409_pis_enum.MessageCode409PisEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
