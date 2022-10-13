from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteJsappsCodeJSONPathParams:
    code: str = field(default=None, metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJsappsCodeJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteJsappsCodeJSONRequest:
    path_params: DeleteJsappsCodeJSONPathParams = field(default=None)
    query_params: DeleteJsappsCodeJSONQueryParams = field(default=None)
    

@dataclass
class DeleteJsappsCodeJSONResponse:
    content_type: str = field(default=None)
    delete_jsapps_code_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
