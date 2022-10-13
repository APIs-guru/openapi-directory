from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ExportPlatformEnum(str, Enum):
    CORE_ML = "CoreML"
    TENSOR_FLOW = "TensorFlow"

class ExportStatusEnum(str, Enum):
    EXPORTING = "Exporting"
    FAILED = "Failed"
    DONE = "Done"


@dataclass_json
@dataclass
class Export:
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DownloadUri' }})
    platform: Optional[ExportPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Platform' }})
    status: Optional[ExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
