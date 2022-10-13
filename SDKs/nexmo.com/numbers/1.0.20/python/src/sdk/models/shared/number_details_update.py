from dataclasses import dataclass, field
from typing import Enum,Optional

class NumberDetailsUpdateMessagesCallbackTypeEnum(str, Enum):
    APP = "app"

class NumberDetailsUpdateVoiceCallbackTypeEnum(str, Enum):
    SIP = "sip"
    TEL = "tel"
    APP = "app"


@dataclass
class NumberDetailsUpdate:
    app_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'app_id' }})
    country: str = field(default=None, metadata={'form': { 'field_name': 'country' }})
    messages_callback_type: Optional[NumberDetailsUpdateMessagesCallbackTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'messagesCallbackType' }})
    messages_callback_value: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'messagesCallbackValue' }})
    mo_http_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'moHttpUrl' }})
    mo_smpp_sys_type: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'moSmppSysType' }})
    msisdn: str = field(default=None, metadata={'form': { 'field_name': 'msisdn' }})
    voice_callback_type: Optional[NumberDetailsUpdateVoiceCallbackTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'voiceCallbackType' }})
    voice_callback_value: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'voiceCallbackValue' }})
    voice_status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'voiceStatusCallback' }})
    
