from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSfdcChannel:
    r"""GoogleCloudIntegrationsV1alphaSfdcChannel
    The SfdcChannel that points to a CDC or Platform Event Channel.
    """
    
    channel_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTopic') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    last_replay_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastReplayId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSfdcChannelInput:
    r"""GoogleCloudIntegrationsV1alphaSfdcChannelInput
    The SfdcChannel that points to a CDC or Platform Event Channel.
    """
    
    channel_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTopic') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    last_replay_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastReplayId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
