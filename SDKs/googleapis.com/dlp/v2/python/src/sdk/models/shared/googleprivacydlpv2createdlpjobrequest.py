from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2inspectjobconfig
from . import googleprivacydlpv2riskanalysisjobconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateDlpJobRequest:
    inspect_job: Optional[googleprivacydlpv2inspectjobconfig.GooglePrivacyDlpV2InspectJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectJob' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    risk_job: Optional[googleprivacydlpv2riskanalysisjobconfig.GooglePrivacyDlpV2RiskAnalysisJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riskJob' }})
    
