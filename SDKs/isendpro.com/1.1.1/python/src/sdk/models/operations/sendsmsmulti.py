from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendSmsMultiRequest:
    request: shared.SmsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendSmsMultiResponse:
    content_type: str = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    sms_reponse: Optional[shared.SmsReponse] = field(default=None)
    status_code: int = field(default=None)
    
