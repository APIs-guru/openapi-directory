from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendSmsRequest:
    request: shared.SmsUniqueRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendSmsResponse:
    content_type: str = field()
    status_code: int = field()
    erreur: Optional[shared.Erreur] = field(default=None)
    sms_reponse: Optional[shared.SmsReponse] = field(default=None)
    
