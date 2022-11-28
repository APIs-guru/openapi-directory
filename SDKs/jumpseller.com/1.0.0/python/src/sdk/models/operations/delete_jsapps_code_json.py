from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteJsappsCodeJSONPathParams:
    code: str = field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJsappsCodeJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteJsappsCodeJSONRequest:
    path_params: DeleteJsappsCodeJSONPathParams = field()
    query_params: DeleteJsappsCodeJSONQueryParams = field()
    

@dataclass
class DeleteJsappsCodeJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_jsapps_code_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
