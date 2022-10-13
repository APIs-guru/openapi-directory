from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NamespaceServingVisibilityEnum(str, Enum):
    VISIBILITY_UNSPECIFIED = "VISIBILITY_UNSPECIFIED"
    UNLISTED = "UNLISTED"
    PUBLIC = "PUBLIC"


@dataclass_json
@dataclass
class Namespace:
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceName' }})
    serving_visibility: Optional[NamespaceServingVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingVisibility' }})
    
