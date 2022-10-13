from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iampolicyanalysisquery
from . import iampolicyanalysisoutputconfig


@dataclass_json
@dataclass
class AnalyzeIamPolicyLongrunningRequest:
    analysis_query: Optional[iampolicyanalysisquery.IamPolicyAnalysisQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisQuery' }})
    output_config: Optional[iampolicyanalysisoutputconfig.IamPolicyAnalysisOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    saved_analysis_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savedAnalysisQuery' }})
    
