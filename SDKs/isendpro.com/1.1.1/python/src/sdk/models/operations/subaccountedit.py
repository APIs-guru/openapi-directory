from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubaccountEditRequest:
    request: shared.SubaccountRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubaccountEditResponse:
    content_type: str = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    status_code: int = field(default=None)
    subaccount_response: Optional[shared.SubaccountResponse] = field(default=None)
    
