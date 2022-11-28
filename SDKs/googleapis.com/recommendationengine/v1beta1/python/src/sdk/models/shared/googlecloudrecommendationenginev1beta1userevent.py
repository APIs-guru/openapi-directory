from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum(str, Enum):
    EVENT_SOURCE_UNSPECIFIED = "EVENT_SOURCE_UNSPECIFIED"
    AUTOML = "AUTOML"
    ECOMMERCE = "ECOMMERCE"
    BATCH_UPLOAD = "BATCH_UPLOAD"


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1UserEvent:
    r"""GoogleCloudRecommendationengineV1beta1UserEvent
    UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
    """
    
    event_detail: Optional[GoogleCloudRecommendationengineV1beta1EventDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDetail') }})
    event_source: Optional[GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    product_event_detail: Optional[GoogleCloudRecommendationengineV1beta1ProductEventDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productEventDetail') }})
    user_info: Optional[GoogleCloudRecommendationengineV1beta1UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    
