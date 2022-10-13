from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1predictresponsepredictionresult


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1PredictResponse:
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dryRun' }})
    items_missing_in_catalog: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsMissingInCatalog' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    recommendation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationToken' }})
    results: Optional[List[googlecloudrecommendationenginev1beta1predictresponsepredictionresult.GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
