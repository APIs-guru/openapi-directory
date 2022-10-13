from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import musicvideoinfo


@dataclass_json
@dataclass
class MusicVideoInfoRemoteSearchQuery:
    include_disabled_providers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeDisabledProviders' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemId' }})
    search_info: Optional[musicvideoinfo.MusicVideoInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchInfo' }})
    search_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchProviderName' }})
    
