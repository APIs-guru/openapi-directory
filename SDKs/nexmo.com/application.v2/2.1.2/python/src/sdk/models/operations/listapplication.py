from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ListApplicationQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class ListApplicationRequest:
    query_params: ListApplicationQueryParams = field()
    

@dataclass
class ListApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    application_response_collection: Optional[Any] = field(default=None)
    list_application_400_application_json_any: Optional[Any] = field(default=None)
    list_application_401_application_json_any: Optional[Any] = field(default=None)
    list_application_405_application_json_any: Optional[Any] = field(default=None)
    list_application_406_application_json_any: Optional[Any] = field(default=None)
    
