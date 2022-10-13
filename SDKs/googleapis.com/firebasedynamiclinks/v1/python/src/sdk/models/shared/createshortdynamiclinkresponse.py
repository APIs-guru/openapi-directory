from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamiclinkwarning


@dataclass_json
@dataclass
class CreateShortDynamicLinkResponse:
    preview_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previewLink' }})
    short_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortLink' }})
    warning: Optional[List[dynamiclinkwarning.DynamicLinkWarning]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warning' }})
    
