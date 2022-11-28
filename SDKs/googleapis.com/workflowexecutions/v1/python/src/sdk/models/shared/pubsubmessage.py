from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PubsubMessage:
    r"""PubsubMessage
    A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.
    """
    
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    ordering_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderingKey') }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    
