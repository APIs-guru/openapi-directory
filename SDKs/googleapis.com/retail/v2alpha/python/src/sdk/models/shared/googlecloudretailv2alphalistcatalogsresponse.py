from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphacatalog


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaListCatalogsResponse:
    catalogs: Optional[List[googlecloudretailv2alphacatalog.GoogleCloudRetailV2alphaCatalog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
