from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Action:
    r"""GooglePrivacyDlpV2Action
    A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
    """
    
    deidentify: Optional[GooglePrivacyDlpV2Deidentify] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentify') }})
    job_notification_emails: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobNotificationEmails') }})
    pub_sub: Optional[GooglePrivacyDlpV2PublishToPubSub] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubSub') }})
    publish_findings_to_cloud_data_catalog: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishFindingsToCloudDataCatalog') }})
    publish_summary_to_cscc: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishSummaryToCscc') }})
    publish_to_stackdriver: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishToStackdriver') }})
    save_findings: Optional[GooglePrivacyDlpV2SaveFindings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saveFindings') }})
    
