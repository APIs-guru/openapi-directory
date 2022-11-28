from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetListeNoireGetListeNoireEnum(str, Enum):
    ONE = "1"


@dataclass
class GetListeNoireQueryParams:
    get_liste_noire: GetListeNoireGetListeNoireEnum = field(metadata={'query_param': { 'field_name': 'getListeNoire', 'style': 'form', 'explode': True }})
    keyid: str = field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListeNoireRequest:
    query_params: GetListeNoireQueryParams = field()
    

@dataclass
class GetListeNoireResponse:
    content_type: str = field()
    status_code: int = field()
    erreur: Optional[shared.Erreur] = field(default=None)
    get_liste_noire_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
