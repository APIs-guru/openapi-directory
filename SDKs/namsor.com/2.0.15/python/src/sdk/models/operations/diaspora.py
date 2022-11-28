from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DiasporaPathParams:
    country_iso2: str = field(metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    first_name: str = field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiasporaSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DiasporaRequest:
    path_params: DiasporaPathParams = field()
    security: DiasporaSecurity = field()
    

@dataclass
class DiasporaResponse:
    content_type: str = field()
    status_code: int = field()
    first_last_name_diasporaed_out: Optional[shared.FirstLastNameDiasporaedOut] = field(default=None)
    
