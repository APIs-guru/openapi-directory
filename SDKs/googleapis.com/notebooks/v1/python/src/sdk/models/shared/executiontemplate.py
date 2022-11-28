from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ExecutionTemplateJobTypeEnum(str, Enum):
    JOB_TYPE_UNSPECIFIED = "JOB_TYPE_UNSPECIFIED"
    VERTEX_AI = "VERTEX_AI"
    DATAPROC = "DATAPROC"

class ExecutionTemplateScaleTierEnum(str, Enum):
    SCALE_TIER_UNSPECIFIED = "SCALE_TIER_UNSPECIFIED"
    BASIC = "BASIC"
    STANDARD_1 = "STANDARD_1"
    PREMIUM_1 = "PREMIUM_1"
    BASIC_GPU = "BASIC_GPU"
    BASIC_TPU = "BASIC_TPU"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class ExecutionTemplate:
    r"""ExecutionTemplate
    The description a notebook execution workload.
    """
    
    accelerator_config: Optional[SchedulerAcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    container_image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImageUri') }})
    dataproc_parameters: Optional[DataprocParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataprocParameters') }})
    input_notebook_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputNotebookFile') }})
    job_type: Optional[ExecutionTemplateJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    kernel_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernelSpec') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    master_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterType') }})
    output_notebook_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputNotebookFolder') }})
    parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    params_yaml_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paramsYamlFile') }})
    scale_tier: Optional[ExecutionTemplateScaleTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleTier') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    tensorboard: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tensorboard') }})
    vertex_ai_parameters: Optional[VertexAiParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertexAiParameters') }})
    
