from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FhirNotificationConfig:
    r"""FhirNotificationConfig
    Contains the configuration for FHIR notifications.
    """
    
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    send_full_resource: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendFullResource') }})
    
