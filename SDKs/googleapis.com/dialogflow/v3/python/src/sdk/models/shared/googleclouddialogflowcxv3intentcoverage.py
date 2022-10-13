from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3intentcoverageintent


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3IntentCoverage:
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverageScore' }})
    intents: Optional[List[googleclouddialogflowcxv3intentcoverageintent.GoogleCloudDialogflowCxV3IntentCoverageIntent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    
