from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSetupV1BusinessusersEmailCompaniesPathParams:
    email: str = field(default=None, metadata={'path_param': { 'field_name': 'email', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1BusinessusersEmailCompaniesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchText', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1BusinessusersEmailCompaniesRequest:
    path_params: GetSetupV1BusinessusersEmailCompaniesPathParams = field(default=None)
    query_params: GetSetupV1BusinessusersEmailCompaniesQueryParams = field(default=None)
    

@dataclass
class GetSetupV1BusinessusersEmailCompaniesResponse:
    authorized_company_list_view_model: Optional[shared.AuthorizedCompanyListViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
