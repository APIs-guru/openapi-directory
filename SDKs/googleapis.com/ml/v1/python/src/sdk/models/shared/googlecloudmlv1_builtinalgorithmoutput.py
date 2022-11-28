from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1BuiltInAlgorithmOutput:
    r"""GoogleCloudMlV1BuiltInAlgorithmOutput
    Represents output related to a built-in algorithm Job.
    """
    
    framework: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('framework') }})
    model_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelPath') }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonVersion') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    
