from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RepertoireRequest:
    request: shared.RepertoirEmodifrequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RepertoireResponse:
    content_type: str = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    repertoir_emodifreponse: Optional[shared.RepertoirEmodifreponse] = field(default=None)
    status_code: int = field(default=None)
    
