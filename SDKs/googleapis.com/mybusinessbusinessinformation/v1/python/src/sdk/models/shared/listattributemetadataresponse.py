from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAttributeMetadataResponse:
    r"""ListAttributeMetadataResponse
    Response for AttributesService.ListAttributeMetadata.
    """
    
    attribute_metadata: Optional[List[AttributeMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeMetadata') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
