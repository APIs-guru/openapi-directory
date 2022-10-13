from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import errorcategory
from . import errordetail


@dataclass_json
@dataclass
class StandardError:
    category: errorcategory.ErrorCategory = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    context: dict[str, List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    errors: List[errordetail.ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sub_category: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subCategory' }})
    
