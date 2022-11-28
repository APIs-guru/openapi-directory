from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ExplanationConfig:
    r"""GoogleCloudMlV1ExplanationConfig
    Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)
    """
    
    integrated_gradients_attribution: Optional[GoogleCloudMlV1IntegratedGradientsAttribution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integratedGradientsAttribution') }})
    sampled_shapley_attribution: Optional[GoogleCloudMlV1SampledShapleyAttribution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampledShapleyAttribution') }})
    xrai_attribution: Optional[GoogleCloudMlV1XraiAttribution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xraiAttribution') }})
    
