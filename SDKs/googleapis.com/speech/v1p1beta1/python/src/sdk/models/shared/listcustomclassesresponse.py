from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customclass


@dataclass_json
@dataclass
class ListCustomClassesResponse:
    custom_classes: Optional[List[customclass.CustomClass]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customClasses' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
