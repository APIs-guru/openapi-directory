from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1XraiAttribution:
    r"""GoogleCloudMlV1XraiAttribution
    Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs.
    """
    
    num_integral_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numIntegralSteps') }})
    
