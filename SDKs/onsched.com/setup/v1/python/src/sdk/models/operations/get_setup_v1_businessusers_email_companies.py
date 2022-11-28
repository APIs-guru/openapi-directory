from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1BusinessusersEmailCompaniesPathParams:
    email: str = field(metadata={'path_param': { 'field_name': 'email', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1BusinessusersEmailCompaniesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchText', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1BusinessusersEmailCompaniesRequest:
    path_params: GetSetupV1BusinessusersEmailCompaniesPathParams = field()
    query_params: GetSetupV1BusinessusersEmailCompaniesQueryParams = field()
    

@dataclass
class GetSetupV1BusinessusersEmailCompaniesResponse:
    content_type: str = field()
    status_code: int = field()
    authorized_company_list_view_model: Optional[shared.AuthorizedCompanyListViewModel] = field(default=None)
    
