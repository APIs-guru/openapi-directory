from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ComptageRequest:
    request: shared.ComptageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ComptageResponse:
    comptage_reponse: Optional[shared.ComptageReponse] = field(default=None)
    content_type: str = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    status_code: int = field(default=None)
    
