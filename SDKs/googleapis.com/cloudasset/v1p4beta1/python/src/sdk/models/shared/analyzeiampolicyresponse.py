from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import iampolicyanalysis
from . import googlecloudassetv1p4beta1analysisstate
from . import iampolicyanalysis


@dataclass_json
@dataclass
class AnalyzeIamPolicyResponse:
    fully_explored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullyExplored' }})
    main_analysis: Optional[iampolicyanalysis.IamPolicyAnalysis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainAnalysis' }})
    non_critical_errors: Optional[List[googlecloudassetv1p4beta1analysisstate.GoogleCloudAssetV1p4beta1AnalysisState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonCriticalErrors' }})
    service_account_impersonation_analysis: Optional[List[iampolicyanalysis.IamPolicyAnalysis]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountImpersonationAnalysis' }})
    
