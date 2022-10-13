from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2LoggingConfig:
    enable_stackdriver_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableStackdriverLogging' }})
    
