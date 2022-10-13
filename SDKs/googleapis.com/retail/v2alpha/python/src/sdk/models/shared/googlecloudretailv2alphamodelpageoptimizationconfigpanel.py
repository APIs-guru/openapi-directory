from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphamodelpageoptimizationconfigcandidate
from . import googlecloudretailv2alphamodelpageoptimizationconfigcandidate


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel:
    candidates: Optional[List[googlecloudretailv2alphamodelpageoptimizationconfigcandidate.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidates' }})
    default_candidate: Optional[googlecloudretailv2alphamodelpageoptimizationconfigcandidate.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCandidate' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    
