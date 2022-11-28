from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksInboundURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksStatusURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooks:
    inbound_url: Optional[CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksInboundURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_url') }})
    status_url: Optional[CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksStatusURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_url') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesMessages:
    r"""CreateApplication201ApplicationJSONCapabilitiesMessages
    Messages / Dispatch related configuration
    """
    
    webhooks: Optional[CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesRtcWebhooksEventURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesRtcWebhooks:
    event_url: Optional[CreateApplication201ApplicationJSONCapabilitiesRtcWebhooksEventURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesRtc:
    r"""CreateApplication201ApplicationJSONCapabilitiesRtc
    RTC / Conversation Service related configuration
    """
    
    webhooks: Optional[CreateApplication201ApplicationJSONCapabilitiesRtcWebhooks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    connection_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_timeout') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    socket_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socket_timeout') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksEventURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    connection_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_timeout') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    socket_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socket_timeout') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    connection_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_timeout') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    socket_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socket_timeout') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooks:
    answer_url: Optional[CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_url') }})
    event_url: Optional[CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksEventURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    fallback_answer_url: Optional[CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallback_answer_url') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilitiesVoice:
    r"""CreateApplication201ApplicationJSONCapabilitiesVoice
    Voice related configuration
    """
    
    webhooks: Optional[CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONCapabilities:
    r"""CreateApplication201ApplicationJSONCapabilities
    Configuration for the products available in this application
    """
    
    messages: Optional[CreateApplication201ApplicationJSONCapabilitiesMessages] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    rtc: Optional[CreateApplication201ApplicationJSONCapabilitiesRtc] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rtc') }})
    vbc: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vbc') }})
    voice: Optional[CreateApplication201ApplicationJSONCapabilitiesVoice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONKeys:
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_key') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSONPrivacy:
    r"""CreateApplication201ApplicationJSONPrivacy
    Application privacy config
    """
    
    improve_ai: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('improve_ai') }})
    

@dataclass_json
@dataclass
class CreateApplication201ApplicationJSON:
    capabilities: Optional[CreateApplication201ApplicationJSONCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    keys: Optional[CreateApplication201ApplicationJSONKeys] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privacy: Optional[CreateApplication201ApplicationJSONPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass
class CreateApplicationRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    create_application_201_application_json_object: Optional[CreateApplication201ApplicationJSON] = field(default=None)
    create_application_400_application_json_any: Optional[Any] = field(default=None)
    create_application_401_application_json_any: Optional[Any] = field(default=None)
    create_application_405_application_json_any: Optional[Any] = field(default=None)
    create_application_406_application_json_any: Optional[Any] = field(default=None)
    create_application_415_application_json_any: Optional[Any] = field(default=None)
    
