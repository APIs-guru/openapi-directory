from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iampolicyanalysisquery


@dataclass_json
@dataclass
class QueryContent:
    iam_policy_analysis_query: Optional[iampolicyanalysisquery.IamPolicyAnalysisQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamPolicyAnalysisQuery' }})
    
