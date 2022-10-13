from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributemetadata


@dataclass_json
@dataclass
class ListAttributeMetadataResponse:
    attributes: Optional[List[attributemetadata.AttributeMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
