from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacatalog


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaListCatalogsResponse:
    catalogs: Optional[List[googlecloudretailv2betacatalog.GoogleCloudRetailV2betaCatalog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
