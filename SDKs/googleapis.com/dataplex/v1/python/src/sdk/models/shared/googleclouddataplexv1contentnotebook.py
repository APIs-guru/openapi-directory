from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1ContentNotebookKernelTypeEnum(str, Enum):
    KERNEL_TYPE_UNSPECIFIED = "KERNEL_TYPE_UNSPECIFIED"
    PYTHON3 = "PYTHON3"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ContentNotebook:
    r"""GoogleCloudDataplexV1ContentNotebook
    Configuration for Notebook content.
    """
    
    kernel_type: Optional[GoogleCloudDataplexV1ContentNotebookKernelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernelType') }})
    
