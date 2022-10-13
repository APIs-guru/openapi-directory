from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import externalidmediatype_enum


@dataclass_json
@dataclass
class ExternalIDInfo:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[externalidmediatype_enum.ExternalIDMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    url_format_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UrlFormatString' }})
    
