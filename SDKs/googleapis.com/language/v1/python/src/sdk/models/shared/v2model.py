from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class V2ModelContentCategoriesVersionEnum(str, Enum):
    CONTENT_CATEGORIES_VERSION_UNSPECIFIED = "CONTENT_CATEGORIES_VERSION_UNSPECIFIED"
    V1 = "V1"
    V2 = "V2"


@dataclass_json
@dataclass
class V2Model:
    r"""V2Model
    Options for the V2 model.
    """
    
    content_categories_version: Optional[V2ModelContentCategoriesVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentCategoriesVersion') }})
    
