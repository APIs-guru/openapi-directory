from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphaimporterrorsconfig
from . import googlecloudretailv2alphausereventinputconfig


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaImportUserEventsRequest:
    errors_config: Optional[googlecloudretailv2alphaimporterrorsconfig.GoogleCloudRetailV2alphaImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorsConfig' }})
    input_config: Optional[googlecloudretailv2alphausereventinputconfig.GoogleCloudRetailV2alphaUserEventInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    
