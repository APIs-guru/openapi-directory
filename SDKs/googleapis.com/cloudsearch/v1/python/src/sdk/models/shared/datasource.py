from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gsuiteprincipal


@dataclass_json
@dataclass
class DataSource:
    disable_modifications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableModifications' }})
    disable_serving: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableServing' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    indexing_service_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexingServiceAccounts' }})
    items_visibility: Optional[List[gsuiteprincipal.GSuitePrincipal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsVisibility' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationIds' }})
    return_thumbnail_urls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnThumbnailUrls' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortName' }})
    
