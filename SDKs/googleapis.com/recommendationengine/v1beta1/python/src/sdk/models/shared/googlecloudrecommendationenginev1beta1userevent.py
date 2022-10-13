from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1eventdetail
from . import googlecloudrecommendationenginev1beta1producteventdetail
from . import googlecloudrecommendationenginev1beta1userinfo

class GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum(str, Enum):
    EVENT_SOURCE_UNSPECIFIED = "EVENT_SOURCE_UNSPECIFIED"
    AUTOML = "AUTOML"
    ECOMMERCE = "ECOMMERCE"
    BATCH_UPLOAD = "BATCH_UPLOAD"


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1UserEvent:
    event_detail: Optional[googlecloudrecommendationenginev1beta1eventdetail.GoogleCloudRecommendationengineV1beta1EventDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDetail' }})
    event_source: Optional[GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSource' }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    product_event_detail: Optional[googlecloudrecommendationenginev1beta1producteventdetail.GoogleCloudRecommendationengineV1beta1ProductEventDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productEventDetail' }})
    user_info: Optional[googlecloudrecommendationenginev1beta1userinfo.GoogleCloudRecommendationengineV1beta1UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    
