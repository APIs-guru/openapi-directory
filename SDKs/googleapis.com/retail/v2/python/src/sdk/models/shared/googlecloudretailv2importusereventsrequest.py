from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2importerrorsconfig
from . import googlecloudretailv2usereventinputconfig


@dataclass_json
@dataclass
class GoogleCloudRetailV2ImportUserEventsRequest:
    errors_config: Optional[googlecloudretailv2importerrorsconfig.GoogleCloudRetailV2ImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorsConfig' }})
    input_config: Optional[googlecloudretailv2usereventinputconfig.GoogleCloudRetailV2UserEventInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    
