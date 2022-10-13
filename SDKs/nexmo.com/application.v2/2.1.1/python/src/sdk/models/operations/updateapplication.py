from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateApplicationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateApplicationRequest:
    path_params: UpdateApplicationPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksInboundURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksStatusURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooks:
    inbound_url: Optional[UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksInboundURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_url' }})
    status_url: Optional[UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksStatusURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_url' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesMessages:
    webhooks: Optional[UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooksEventURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooks:
    event_url: Optional[UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooksEventURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_url' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesRtc:
    webhooks: Optional[UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    connection_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_timeout' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    socket_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'socket_timeout' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksEventURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    connection_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_timeout' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    socket_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'socket_timeout' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    connection_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_timeout' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    socket_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'socket_timeout' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooks:
    answer_url: Optional[UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer_url' }})
    event_url: Optional[UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksEventURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_url' }})
    fallback_answer_url: Optional[UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fallback_answer_url' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilitiesVoice:
    webhooks: Optional[UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONCapabilities:
    messages: Optional[UpdateApplication200ApplicationJSONCapabilitiesMessages] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    rtc: Optional[UpdateApplication200ApplicationJSONCapabilitiesRtc] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rtc' }})
    vbc: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vbc' }})
    voice: Optional[UpdateApplication200ApplicationJSONCapabilitiesVoice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONKeys:
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_key' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSONPrivacy:
    improve_ai: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'improve_ai' }})
    

@dataclass_json
@dataclass
class UpdateApplication200ApplicationJSON:
    capabilities: Optional[UpdateApplication200ApplicationJSONCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    keys: Optional[UpdateApplication200ApplicationJSONKeys] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    privacy: Optional[UpdateApplication200ApplicationJSONPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass
class UpdateApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_application_200_application_json_object: Optional[UpdateApplication200ApplicationJSON] = field(default=None)
    update_application_400_application_json_any: Optional[Any] = field(default=None)
    update_application_401_application_json_any: Optional[Any] = field(default=None)
    update_application_404_application_json_any: Optional[Any] = field(default=None)
    update_application_405_application_json_any: Optional[Any] = field(default=None)
    update_application_406_application_json_any: Optional[Any] = field(default=None)
    update_application_415_application_json_any: Optional[Any] = field(default=None)
    
