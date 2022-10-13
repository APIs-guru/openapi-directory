from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudMlV1BuiltInAlgorithmOutput:
    framework: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'framework' }})
    model_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelPath' }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonVersion' }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeVersion' }})
    
