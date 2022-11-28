from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class SetListeNoireSetlisteNoireEnum(str, Enum):
    ONE = "1"


@dataclass
class SetListeNoireQueryParams:
    keyid: str = field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    num: str = field(metadata={'query_param': { 'field_name': 'num', 'style': 'form', 'explode': True }})
    setliste_noire: SetListeNoireSetlisteNoireEnum = field(metadata={'query_param': { 'field_name': 'setlisteNoire', 'style': 'form', 'explode': True }})
    

@dataclass
class SetListeNoireRequest:
    query_params: SetListeNoireQueryParams = field()
    

@dataclass
class SetListeNoireResponse:
    content_type: str = field()
    status_code: int = field()
    erreur: Optional[shared.Erreur] = field(default=None)
    listenoire_reponse: Optional[shared.ListenoireReponse] = field(default=None)
    
