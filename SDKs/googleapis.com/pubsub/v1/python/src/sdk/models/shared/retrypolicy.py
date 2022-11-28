from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetryPolicy:
    r"""RetryPolicy
    A policy that specifies how Cloud Pub/Sub retries message delivery. Retry delay will be exponential based on provided minimum and maximum backoffs. https://en.wikipedia.org/wiki/Exponential_backoff. RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message. Retry Policy is implemented on a best effort basis. At times, the delay between consecutive deliveries may not match the configuration. That is, delay can be more or less than configured backoff.
    """
    
    maximum_backoff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumBackoff') }})
    minimum_backoff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumBackoff') }})
    
