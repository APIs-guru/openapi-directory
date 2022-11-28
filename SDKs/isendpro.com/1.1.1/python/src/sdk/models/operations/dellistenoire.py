from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DelListeNoireDelListeNoireEnum(str, Enum):
    ONE = "1"


@dataclass
class DelListeNoireQueryParams:
    del_liste_noire: DelListeNoireDelListeNoireEnum = field(metadata={'query_param': { 'field_name': 'delListeNoire', 'style': 'form', 'explode': True }})
    keyid: str = field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    num: str = field(metadata={'query_param': { 'field_name': 'num', 'style': 'form', 'explode': True }})
    

@dataclass
class DelListeNoireRequest:
    query_params: DelListeNoireQueryParams = field()
    

@dataclass
class DelListeNoireResponse:
    content_type: str = field()
    status_code: int = field()
    erreur: Optional[shared.Erreur] = field(default=None)
    listenoire_reponse: Optional[shared.ListenoireReponse] = field(default=None)
    
