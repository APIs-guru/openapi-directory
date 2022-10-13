from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1catalog


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ListCatalogsResponse:
    catalogs: Optional[List[googlecloudrecommendationenginev1beta1catalog.GoogleCloudRecommendationengineV1beta1Catalog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
