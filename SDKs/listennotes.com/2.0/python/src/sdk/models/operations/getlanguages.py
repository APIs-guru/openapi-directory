from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetLanguagesHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLanguagesRequest:
    headers: GetLanguagesHeaders = field()
    

@dataclass
class GetLanguagesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_languages_response: Optional[shared.GetLanguagesResponse] = field(default=None)
    
