from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class SetListeNoireSetlisteNoireEnum(str, Enum):
    ONE = "1"


@dataclass
class SetListeNoireQueryParams:
    keyid: str = field(default=None, metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    num: str = field(default=None, metadata={'query_param': { 'field_name': 'num', 'style': 'form', 'explode': True }})
    setliste_noire: SetListeNoireSetlisteNoireEnum = field(default=None, metadata={'query_param': { 'field_name': 'setlisteNoire', 'style': 'form', 'explode': True }})
    

@dataclass
class SetListeNoireRequest:
    query_params: SetListeNoireQueryParams = field(default=None)
    

@dataclass
class SetListeNoireResponse:
    content_type: str = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    listenoire_reponse: Optional[shared.ListenoireReponse] = field(default=None)
    status_code: int = field(default=None)
    
