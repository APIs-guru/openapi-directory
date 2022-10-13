from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHlrRequest:
    request: shared.HlRrequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetHlrResponse:
    content_type: str = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    hlr_reponse: Optional[shared.HlrReponse] = field(default=None)
    status_code: int = field(default=None)
    
