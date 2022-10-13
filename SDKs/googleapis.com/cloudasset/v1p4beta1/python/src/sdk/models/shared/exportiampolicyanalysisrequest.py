from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iampolicyanalysisquery
from . import options
from . import iampolicyanalysisoutputconfig


@dataclass_json
@dataclass
class ExportIamPolicyAnalysisRequest:
    analysis_query: Optional[iampolicyanalysisquery.IamPolicyAnalysisQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisQuery' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    output_config: Optional[iampolicyanalysisoutputconfig.IamPolicyAnalysisOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    
