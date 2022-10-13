from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import managedshortlink
from . import dynamiclinkwarning


@dataclass_json
@dataclass
class CreateManagedShortLinkResponse:
    managed_short_link: Optional[managedshortlink.ManagedShortLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedShortLink' }})
    preview_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previewLink' }})
    warning: Optional[List[dynamiclinkwarning.DynamicLinkWarning]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warning' }})
    
