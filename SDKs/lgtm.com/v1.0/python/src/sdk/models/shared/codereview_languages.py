from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import codereview_alerts

class CodereviewLanguagesStatusEnum(str, Enum):
    PENDING = "pending"
    FAILURE = "failure"
    SUCCESS = "success"


@dataclass_json
@dataclass
class CodereviewLanguages:
    alerts: Optional[List[codereview_alerts.CodereviewAlerts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alerts' }})
    fixed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    new: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new' }})
    status: Optional[CodereviewLanguagesStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status-message' }})
    
