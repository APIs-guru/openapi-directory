from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NameTypeGeoPathParams:
    country_iso2: str = field(default=None, metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    proper_noun: str = field(default=None, metadata={'path_param': { 'field_name': 'properNoun', 'style': 'simple', 'explode': False }})
    

@dataclass
class NameTypeGeoSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class NameTypeGeoRequest:
    path_params: NameTypeGeoPathParams = field(default=None)
    security: NameTypeGeoSecurity = field(default=None)
    

@dataclass
class NameTypeGeoResponse:
    content_type: str = field(default=None)
    proper_noun_categorized_out: Optional[shared.ProperNounCategorizedOut] = field(default=None)
    status_code: int = field(default=None)
    
