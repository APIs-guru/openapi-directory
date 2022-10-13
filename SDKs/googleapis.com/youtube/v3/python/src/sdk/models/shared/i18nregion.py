from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import i18nregionsnippet


@dataclass_json
@dataclass
class I18nRegion:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[i18nregionsnippet.I18nRegionSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
