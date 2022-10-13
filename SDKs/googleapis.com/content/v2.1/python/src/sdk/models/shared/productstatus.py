from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productstatusdestinationstatus
from . import productstatusitemlevelissue


@dataclass_json
@dataclass
class ProductStatus:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    destination_statuses: Optional[List[productstatusdestinationstatus.ProductStatusDestinationStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationStatuses' }})
    google_expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleExpirationDate' }})
    item_level_issues: Optional[List[productstatusitemlevelissue.ProductStatusItemLevelIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemLevelIssues' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateDate' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
