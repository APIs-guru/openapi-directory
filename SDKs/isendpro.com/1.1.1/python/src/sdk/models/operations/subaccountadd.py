from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubaccountAddRequest:
    request: shared.SubaccountAddRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubaccountAddResponse:
    content_type: str = field()
    status_code: int = field()
    erreur: Optional[shared.Erreur] = field(default=None)
    subaccount_add_response: Optional[shared.SubaccountAddResponse] = field(default=None)
    
