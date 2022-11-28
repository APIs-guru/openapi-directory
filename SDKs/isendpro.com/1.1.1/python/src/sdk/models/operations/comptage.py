from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ComptageRequest:
    request: shared.ComptageRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ComptageResponse:
    content_type: str = field()
    status_code: int = field()
    comptage_reponse: Optional[shared.ComptageReponse] = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    
