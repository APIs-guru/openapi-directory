from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class V2ModelContentCategoriesVersionEnum(str, Enum):
    CONTENT_CATEGORIES_VERSION_UNSPECIFIED = "CONTENT_CATEGORIES_VERSION_UNSPECIFIED"
    V1 = "V1"
    V2 = "V2"


@dataclass_json
@dataclass
class V2Model:
    content_categories_version: Optional[V2ModelContentCategoriesVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentCategoriesVersion' }})
    
