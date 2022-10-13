from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import iampolicyanalysisquery
from . import iampolicyanalysisresult


@dataclass_json
@dataclass
class IamPolicyAnalysis:
    analysis_query: Optional[iampolicyanalysisquery.IamPolicyAnalysisQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisQuery' }})
    analysis_results: Optional[List[iampolicyanalysisresult.IamPolicyAnalysisResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisResults' }})
    fully_explored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullyExplored' }})
    
