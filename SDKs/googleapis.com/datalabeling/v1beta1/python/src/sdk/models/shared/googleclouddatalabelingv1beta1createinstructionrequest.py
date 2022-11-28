from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1CreateInstructionRequest:
    r"""GoogleCloudDatalabelingV1beta1CreateInstructionRequest
    Request message for CreateInstruction.
    """
    
    instruction: Optional[GoogleCloudDatalabelingV1beta1Instruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instruction') }})
    
