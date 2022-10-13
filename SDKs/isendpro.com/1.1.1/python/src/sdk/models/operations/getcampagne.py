from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetCampagneRapportCampagneEnum(str, Enum):
    ONE = "1"


@dataclass
class GetCampagneQueryParams:
    date_deb: str = field(default=None, metadata={'query_param': { 'field_name': 'date_deb', 'style': 'form', 'explode': True }})
    date_fin: str = field(default=None, metadata={'query_param': { 'field_name': 'date_fin', 'style': 'form', 'explode': True }})
    keyid: str = field(default=None, metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    rapport_campagne: GetCampagneRapportCampagneEnum = field(default=None, metadata={'query_param': { 'field_name': 'rapportCampagne', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCampagneRequest:
    query_params: GetCampagneQueryParams = field(default=None)
    

@dataclass
class GetCampagneResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    status_code: int = field(default=None)
    get_campagne_200_application_json_binary_string: Optional[bytes] = field(default=None)
    get_campagne_200_file_binary_string: Optional[bytes] = field(default=None)
    
