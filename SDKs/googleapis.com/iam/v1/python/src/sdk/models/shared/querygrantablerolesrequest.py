from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class QueryGrantableRolesRequestViewEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class QueryGrantableRolesRequest:
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullResourceName' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    view: Optional[QueryGrantableRolesRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
