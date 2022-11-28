from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NameTypePathParams:
    proper_noun: str = field(metadata={'path_param': { 'field_name': 'properNoun', 'style': 'simple', 'explode': False }})
    

@dataclass
class NameTypeSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class NameTypeRequest:
    path_params: NameTypePathParams = field()
    security: NameTypeSecurity = field()
    

@dataclass
class NameTypeResponse:
    content_type: str = field()
    status_code: int = field()
    proper_noun_categorized_out: Optional[shared.ProperNounCategorizedOut] = field(default=None)
    
