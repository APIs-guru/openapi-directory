from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2deidentify
from . import googleprivacydlpv2publishtopubsub
from . import googleprivacydlpv2savefindings


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Action:
    deidentify: Optional[googleprivacydlpv2deidentify.GooglePrivacyDlpV2Deidentify] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentify' }})
    job_notification_emails: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobNotificationEmails' }})
    pub_sub: Optional[googleprivacydlpv2publishtopubsub.GooglePrivacyDlpV2PublishToPubSub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubSub' }})
    publish_findings_to_cloud_data_catalog: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishFindingsToCloudDataCatalog' }})
    publish_summary_to_cscc: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishSummaryToCscc' }})
    publish_to_stackdriver: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishToStackdriver' }})
    save_findings: Optional[googleprivacydlpv2savefindings.GooglePrivacyDlpV2SaveFindings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saveFindings' }})
    
