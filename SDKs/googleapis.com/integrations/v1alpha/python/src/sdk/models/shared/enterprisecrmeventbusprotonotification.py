from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotobuganizernotification
from . import enterprisecrmeventbusprotoaddress
from . import enterprisecrmeventbusprotocustomsuspensionrequest


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoNotification:
    buganizer_notification: Optional[enterprisecrmeventbusprotobuganizernotification.EnterpriseCrmEventbusProtoBuganizerNotification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buganizerNotification' }})
    email_address: Optional[enterprisecrmeventbusprotoaddress.EnterpriseCrmEventbusProtoAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    escalator_queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'escalatorQueue' }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTopic' }})
    request: Optional[enterprisecrmeventbusprotocustomsuspensionrequest.EnterpriseCrmEventbusProtoCustomSuspensionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    
