from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExportFlavorEnum(str, Enum):
    LINUX = "Linux"
    WINDOWS = "Windows"

class ExportPlatformEnum(str, Enum):
    CORE_ML = "CoreML"
    TENSOR_FLOW = "TensorFlow"
    DOCKER_FILE = "DockerFile"
    ONNX = "ONNX"

class ExportStatusEnum(str, Enum):
    EXPORTING = "Exporting"
    FAILED = "Failed"
    DONE = "Done"


@dataclass_json
@dataclass
class Export:
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUri') }})
    flavor: Optional[ExportFlavorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flavor') }})
    newer_version_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newerVersionAvailable') }})
    platform: Optional[ExportPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    status: Optional[ExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
