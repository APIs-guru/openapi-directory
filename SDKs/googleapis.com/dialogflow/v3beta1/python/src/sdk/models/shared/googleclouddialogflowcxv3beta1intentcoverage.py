from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1intentcoverageintent


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1IntentCoverage:
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverageScore' }})
    intents: Optional[List[googleclouddialogflowcxv3beta1intentcoverageintent.GoogleCloudDialogflowCxV3beta1IntentCoverageIntent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    
