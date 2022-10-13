from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RevisionCheckResponseRevisionStatusEnum(str, Enum):
    REVISION_STATUS_UNSPECIFIED = "REVISION_STATUS_UNSPECIFIED"
    OK = "OK"
    DEPRECATED = "DEPRECATED"
    INVALID = "INVALID"


@dataclass_json
@dataclass
class RevisionCheckResponse:
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    revision_status: Optional[RevisionCheckResponseRevisionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionStatus' }})
    
