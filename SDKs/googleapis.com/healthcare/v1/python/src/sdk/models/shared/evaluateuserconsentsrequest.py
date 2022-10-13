from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import consentlist

class EvaluateUserConsentsRequestResponseViewEnum(str, Enum):
    RESPONSE_VIEW_UNSPECIFIED = "RESPONSE_VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class EvaluateUserConsentsRequest:
    consent_list: Optional[consentlist.ConsentList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentList' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    request_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestAttributes' }})
    resource_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceAttributes' }})
    response_view: Optional[EvaluateUserConsentsRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseView' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
