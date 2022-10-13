from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDataplexV1ContentNotebookKernelTypeEnum(str, Enum):
    KERNEL_TYPE_UNSPECIFIED = "KERNEL_TYPE_UNSPECIFIED"
    PYTHON3 = "PYTHON3"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ContentNotebook:
    kernel_type: Optional[GoogleCloudDataplexV1ContentNotebookKernelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernelType' }})
    
