from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    FIXED = "FIXED"
    MOVABLE = "MOVABLE"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1AliasContext:
    kind: Optional[GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
