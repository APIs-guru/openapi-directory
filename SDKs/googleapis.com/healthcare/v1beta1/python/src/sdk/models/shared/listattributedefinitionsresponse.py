from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributedefinition


@dataclass_json
@dataclass
class ListAttributeDefinitionsResponse:
    attribute_definitions: Optional[List[attributedefinition.AttributeDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeDefinitions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
