from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CorridorPathParams:
    country_iso2_from: str = field(default=None, metadata={'path_param': { 'field_name': 'countryIso2From', 'style': 'simple', 'explode': False }})
    country_iso2_to: str = field(default=None, metadata={'path_param': { 'field_name': 'countryIso2To', 'style': 'simple', 'explode': False }})
    first_name_from: str = field(default=None, metadata={'path_param': { 'field_name': 'firstNameFrom', 'style': 'simple', 'explode': False }})
    first_name_to: str = field(default=None, metadata={'path_param': { 'field_name': 'firstNameTo', 'style': 'simple', 'explode': False }})
    last_name_from: str = field(default=None, metadata={'path_param': { 'field_name': 'lastNameFrom', 'style': 'simple', 'explode': False }})
    last_name_to: str = field(default=None, metadata={'path_param': { 'field_name': 'lastNameTo', 'style': 'simple', 'explode': False }})
    

@dataclass
class CorridorSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CorridorRequest:
    path_params: CorridorPathParams = field(default=None)
    security: CorridorSecurity = field(default=None)
    

@dataclass
class CorridorResponse:
    content_type: str = field(default=None)
    corridor_out: Optional[shared.CorridorOut] = field(default=None)
    status_code: int = field(default=None)
    
