from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2inspectjobconfig
from . import googleprivacydlpv2inspecttemplate


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RequestedOptions:
    job_config: Optional[googleprivacydlpv2inspectjobconfig.GooglePrivacyDlpV2InspectJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobConfig' }})
    snapshot_inspect_template: Optional[googleprivacydlpv2inspecttemplate.GooglePrivacyDlpV2InspectTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotInspectTemplate' }})
    
