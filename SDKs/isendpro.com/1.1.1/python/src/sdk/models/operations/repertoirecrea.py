from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RepertoireCreaRequest:
    request: shared.RepertoirEcreaterequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RepertoireCreaResponse:
    content_type: str = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    repertoir_ecreatereponse: Optional[shared.RepertoirEcreatereponse] = field(default=None)
    status_code: int = field(default=None)
    
