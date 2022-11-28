from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    FIXED = "FIXED"
    MOVABLE = "MOVABLE"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1AliasContext:
    r"""GoogleDevtoolsContaineranalysisV1alpha1AliasContext
    An alias to a repo revision.
    """
    
    kind: Optional[GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
