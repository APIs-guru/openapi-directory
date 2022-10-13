from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userasset


@dataclass_json
@dataclass
class ListUserAssetsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    user_assets: Optional[List[userasset.UserAsset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAssets' }})
    
