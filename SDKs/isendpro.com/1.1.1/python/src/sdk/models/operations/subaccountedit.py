from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubaccountEditRequest:
    request: shared.SubaccountRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubaccountEditResponse:
    content_type: str = field()
    status_code: int = field()
    erreur: Optional[shared.Erreur] = field(default=None)
    subaccount_response: Optional[shared.SubaccountResponse] = field(default=None)
    
