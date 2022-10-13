from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2riskanalysisjobconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RequestedRiskAnalysisOptions:
    job_config: Optional[googleprivacydlpv2riskanalysisjobconfig.GooglePrivacyDlpV2RiskAnalysisJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobConfig' }})
    
