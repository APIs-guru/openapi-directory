from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCustomFieldsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomFieldsJSONRequest:
    query_params: GetCustomFieldsJSONQueryParams = field()
    

@dataclass
class GetCustomFieldsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    custom_fields: Optional[List[shared.CustomField]] = field(default=None)
    
