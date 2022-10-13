from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import repositoryerror

class PushItemTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    MODIFIED = "MODIFIED"
    NOT_MODIFIED = "NOT_MODIFIED"
    REPOSITORY_ERROR = "REPOSITORY_ERROR"
    REQUEUE = "REQUEUE"


@dataclass_json
@dataclass
class PushItem:
    content_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentHash' }})
    metadata_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataHash' }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queue' }})
    repository_error: Optional[repositoryerror.RepositoryError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryError' }})
    structured_data_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredDataHash' }})
    type: Optional[PushItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
