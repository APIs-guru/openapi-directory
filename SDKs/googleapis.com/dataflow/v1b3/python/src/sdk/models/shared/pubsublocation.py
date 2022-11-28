from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PubsubLocation:
    r"""PubsubLocation
    Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.
    """
    
    drop_late_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropLateData') }})
    id_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idLabel') }})
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    timestamp_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampLabel') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    tracking_subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingSubscription') }})
    with_attributes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withAttributes') }})
    
