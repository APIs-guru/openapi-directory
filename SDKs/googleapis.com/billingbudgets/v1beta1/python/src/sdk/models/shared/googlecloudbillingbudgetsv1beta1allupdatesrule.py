from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1AllUpdatesRule:
    r"""GoogleCloudBillingBudgetsV1beta1AllUpdatesRule
    AllUpdatesRule defines notifications that are sent based on budget spend and thresholds.
    """
    
    disable_default_iam_recipients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableDefaultIamRecipients') }})
    monitoring_notification_channels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringNotificationChannels') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    
