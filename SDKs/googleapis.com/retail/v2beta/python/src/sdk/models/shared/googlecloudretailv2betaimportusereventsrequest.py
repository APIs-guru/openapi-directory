from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betaimporterrorsconfig
from . import googlecloudretailv2betausereventinputconfig


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaImportUserEventsRequest:
    errors_config: Optional[googlecloudretailv2betaimporterrorsconfig.GoogleCloudRetailV2betaImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorsConfig' }})
    input_config: Optional[googlecloudretailv2betausereventinputconfig.GoogleCloudRetailV2betaUserEventInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    
