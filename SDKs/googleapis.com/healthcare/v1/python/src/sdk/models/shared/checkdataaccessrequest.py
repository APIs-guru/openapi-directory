from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import consentlist

class CheckDataAccessRequestResponseViewEnum(str, Enum):
    RESPONSE_VIEW_UNSPECIFIED = "RESPONSE_VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class CheckDataAccessRequest:
    consent_list: Optional[consentlist.ConsentList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentList' }})
    data_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataId' }})
    request_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestAttributes' }})
    response_view: Optional[CheckDataAccessRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseView' }})
    
