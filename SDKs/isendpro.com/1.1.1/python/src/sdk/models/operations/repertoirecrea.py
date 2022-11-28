from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RepertoireCreaRequest:
    request: shared.RepertoirEcreaterequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RepertoireCreaResponse:
    content_type: str = field()
    status_code: int = field()
    erreur: Optional[shared.Erreur] = field(default=None)
    repertoir_ecreatereponse: Optional[shared.RepertoirEcreatereponse] = field(default=None)
    
