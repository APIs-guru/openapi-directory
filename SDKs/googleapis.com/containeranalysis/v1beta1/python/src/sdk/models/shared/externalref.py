from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExternalRefCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    SECURITY = "SECURITY"
    PACKAGE_MANAGER = "PACKAGE_MANAGER"
    PERSISTENT_ID = "PERSISTENT_ID"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class ExternalRef:
    r"""ExternalRef
    An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package
    """
    
    category: Optional[ExternalRefCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    locator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locator') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
