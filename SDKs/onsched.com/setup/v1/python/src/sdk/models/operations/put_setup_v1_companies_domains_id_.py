from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1CompaniesDomainsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1CompaniesDomainsIDRequests:
    company_domain_update_model: Optional[shared.CompanyDomainUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    company_domain_update_model1: Optional[shared.CompanyDomainUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    company_domain_update_model2: Optional[shared.CompanyDomainUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    company_domain_update_model3: Optional[shared.CompanyDomainUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1CompaniesDomainsIDRequest:
    path_params: PutSetupV1CompaniesDomainsIDPathParams = field()
    request: Optional[PutSetupV1CompaniesDomainsIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1CompaniesDomainsIDResponse:
    content_type: str = field()
    status_code: int = field()
    company_domain_view_model: Optional[shared.CompanyDomainViewModel] = field(default=None)
    
