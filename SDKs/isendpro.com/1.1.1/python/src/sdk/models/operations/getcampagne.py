from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetCampagneRapportCampagneEnum(str, Enum):
    ONE = "1"


@dataclass
class GetCampagneQueryParams:
    date_deb: str = field(metadata={'query_param': { 'field_name': 'date_deb', 'style': 'form', 'explode': True }})
    date_fin: str = field(metadata={'query_param': { 'field_name': 'date_fin', 'style': 'form', 'explode': True }})
    keyid: str = field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    rapport_campagne: GetCampagneRapportCampagneEnum = field(metadata={'query_param': { 'field_name': 'rapportCampagne', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCampagneRequest:
    query_params: GetCampagneQueryParams = field()
    

@dataclass
class GetCampagneResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    get_campagne_200_application_json_binary_string: Optional[bytes] = field(default=None)
    get_campagne_200_file_binary_string: Optional[bytes] = field(default=None)
    
