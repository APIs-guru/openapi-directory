from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ConvertURLQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class ConvertURLRequest:
    query_params: ConvertURLQueryParams = field()
    

@dataclass
class ConvertURLResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    convert_url_200_application_json_any: Optional[Any] = field(default=None)
    
