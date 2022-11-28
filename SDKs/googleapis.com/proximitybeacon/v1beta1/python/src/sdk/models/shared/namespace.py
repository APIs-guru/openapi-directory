from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NamespaceServingVisibilityEnum(str, Enum):
    VISIBILITY_UNSPECIFIED = "VISIBILITY_UNSPECIFIED"
    UNLISTED = "UNLISTED"
    PUBLIC = "PUBLIC"


@dataclass_json
@dataclass
class Namespace:
    r"""Namespace
    An attachment namespace defines read and write access for all the attachments created under it. Each namespace is globally unique, and owned by one project which is the only project that can create attachments under it.
    """
    
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    serving_visibility: Optional[NamespaceServingVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingVisibility') }})
    
