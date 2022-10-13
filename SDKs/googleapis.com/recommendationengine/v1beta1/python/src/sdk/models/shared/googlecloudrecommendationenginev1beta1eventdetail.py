from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1featuremap


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1EventDetail:
    event_attributes: Optional[googlecloudrecommendationenginev1beta1featuremap.GoogleCloudRecommendationengineV1beta1FeatureMap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventAttributes' }})
    experiment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentIds' }})
    page_view_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageViewId' }})
    recommendation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationToken' }})
    referrer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrerUri' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
