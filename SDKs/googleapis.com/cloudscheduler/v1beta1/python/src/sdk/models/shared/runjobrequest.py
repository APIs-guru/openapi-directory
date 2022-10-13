from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RunJobRequest:
    legacy_app_engine_cron: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyAppEngineCron' }})
    
