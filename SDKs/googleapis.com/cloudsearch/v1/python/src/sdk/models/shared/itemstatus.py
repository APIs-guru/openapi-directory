from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import processingerror
from . import repositoryerror

class ItemStatusCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    ERROR = "ERROR"
    MODIFIED = "MODIFIED"
    NEW_ITEM = "NEW_ITEM"
    ACCEPTED = "ACCEPTED"


@dataclass_json
@dataclass
class ItemStatus:
    code: Optional[ItemStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    processing_errors: Optional[List[processingerror.ProcessingError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingErrors' }})
    repository_errors: Optional[List[repositoryerror.RepositoryError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryErrors' }})
    
