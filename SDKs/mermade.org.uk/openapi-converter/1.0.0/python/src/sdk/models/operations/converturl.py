from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ConvertURLQueryParams:
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class ConvertURLRequest:
    query_params: ConvertURLQueryParams = field(default=None)
    

@dataclass
class ConvertURLResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    convert_url_200_application_json_any: Optional[Any] = field(default=None)
    
