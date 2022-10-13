from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetListeNoireGetListeNoireEnum(str, Enum):
    ONE = "1"


@dataclass
class GetListeNoireQueryParams:
    get_liste_noire: GetListeNoireGetListeNoireEnum = field(default=None, metadata={'query_param': { 'field_name': 'getListeNoire', 'style': 'form', 'explode': True }})
    keyid: str = field(default=None, metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListeNoireRequest:
    query_params: GetListeNoireQueryParams = field(default=None)
    

@dataclass
class GetListeNoireResponse:
    content_type: str = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    status_code: int = field(default=None)
    get_liste_noire_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
