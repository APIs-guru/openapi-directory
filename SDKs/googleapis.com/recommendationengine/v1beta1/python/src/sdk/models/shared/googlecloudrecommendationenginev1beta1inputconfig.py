from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1bigquerysource
from . import googlecloudrecommendationenginev1beta1cataloginlinesource
from . import googlecloudrecommendationenginev1beta1gcssource
from . import googlecloudrecommendationenginev1beta1usereventinlinesource


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1InputConfig:
    big_query_source: Optional[googlecloudrecommendationenginev1beta1bigquerysource.GoogleCloudRecommendationengineV1beta1BigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    catalog_inline_source: Optional[googlecloudrecommendationenginev1beta1cataloginlinesource.GoogleCloudRecommendationengineV1beta1CatalogInlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogInlineSource' }})
    gcs_source: Optional[googlecloudrecommendationenginev1beta1gcssource.GoogleCloudRecommendationengineV1beta1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    user_event_inline_source: Optional[googlecloudrecommendationenginev1beta1usereventinlinesource.GoogleCloudRecommendationengineV1beta1UserEventInlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEventInlineSource' }})
    
