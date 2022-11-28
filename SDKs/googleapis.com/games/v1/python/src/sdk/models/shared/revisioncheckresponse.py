from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RevisionCheckResponseRevisionStatusEnum(str, Enum):
    REVISION_STATUS_UNSPECIFIED = "REVISION_STATUS_UNSPECIFIED"
    OK = "OK"
    DEPRECATED = "DEPRECATED"
    INVALID = "INVALID"


@dataclass_json
@dataclass
class RevisionCheckResponse:
    r"""RevisionCheckResponse
    A third party checking a revision response.
    """
    
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    revision_status: Optional[RevisionCheckResponseRevisionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionStatus') }})
    
