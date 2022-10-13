from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2catalog


@dataclass_json
@dataclass
class GoogleCloudRetailV2ListCatalogsResponse:
    catalogs: Optional[List[googlecloudretailv2catalog.GoogleCloudRetailV2Catalog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
