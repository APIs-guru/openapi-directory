from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventorywindowsupdatepackagewindowsupdatecategory


@dataclass_json
@dataclass
class InventoryWindowsUpdatePackage:
    categories: Optional[List[inventorywindowsupdatepackagewindowsupdatecategory.InventoryWindowsUpdatePackageWindowsUpdateCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    kb_article_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kbArticleIds' }})
    last_deployment_change_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeploymentChangeTime' }})
    more_info_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moreInfoUrls' }})
    revision_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionNumber' }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    update_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateId' }})
    
