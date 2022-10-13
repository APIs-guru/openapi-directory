from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__integratedgradientsattribution
from . import googlecloudmlv1__sampledshapleyattribution
from . import googlecloudmlv1__xraiattribution


@dataclass_json
@dataclass
class GoogleCloudMlV1ExplanationConfig:
    integrated_gradients_attribution: Optional[googlecloudmlv1__integratedgradientsattribution.GoogleCloudMlV1IntegratedGradientsAttribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integratedGradientsAttribution' }})
    sampled_shapley_attribution: Optional[googlecloudmlv1__sampledshapleyattribution.GoogleCloudMlV1SampledShapleyAttribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampledShapleyAttribution' }})
    xrai_attribution: Optional[googlecloudmlv1__xraiattribution.GoogleCloudMlV1XraiAttribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xraiAttribution' }})
    
