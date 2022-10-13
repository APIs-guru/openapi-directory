from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetLanguagesHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLanguagesRequest:
    headers: GetLanguagesHeaders = field(default=None)
    

@dataclass
class GetLanguagesResponse:
    content_type: str = field(default=None)
    get_languages_response: Optional[shared.GetLanguagesResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
