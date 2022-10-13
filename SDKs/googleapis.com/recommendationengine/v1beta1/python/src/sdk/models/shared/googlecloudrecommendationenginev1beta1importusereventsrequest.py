from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1importerrorsconfig
from . import googlecloudrecommendationenginev1beta1inputconfig


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest:
    errors_config: Optional[googlecloudrecommendationenginev1beta1importerrorsconfig.GoogleCloudRecommendationengineV1beta1ImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorsConfig' }})
    input_config: Optional[googlecloudrecommendationenginev1beta1inputconfig.GoogleCloudRecommendationengineV1beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
