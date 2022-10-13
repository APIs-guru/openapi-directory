from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1_automatedstoppingconfig_decaycurveautomatedstoppingconfig
from . import googlecloudmlv1_automatedstoppingconfig_medianautomatedstoppingconfig


@dataclass_json
@dataclass
class GoogleCloudMlV1AutomatedStoppingConfig:
    decay_curve_stopping_config: Optional[googlecloudmlv1_automatedstoppingconfig_decaycurveautomatedstoppingconfig.GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decayCurveStoppingConfig' }})
    median_automated_stopping_config: Optional[googlecloudmlv1_automatedstoppingconfig_medianautomatedstoppingconfig.GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medianAutomatedStoppingConfig' }})
    
