from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SessionControllerCreateLandlordLoginPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerCreateLandlordLoginQueryParams:
    contact_details: str = field(metadata={'query_param': { 'field_name': 'contactDetails', 'style': 'form', 'explode': True }})
    email: str = field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    forename: str = field(metadata={'query_param': { 'field_name': 'forename', 'style': 'form', 'explode': True }})
    property_address: str = field(metadata={'query_param': { 'field_name': 'propertyAddress', 'style': 'form', 'explode': True }})
    surname: str = field(metadata={'query_param': { 'field_name': 'surname', 'style': 'form', 'explode': True }})
    title: str = field(metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    branch_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'branchID', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerCreateLandlordLoginRequest:
    path_params: SessionControllerCreateLandlordLoginPathParams = field()
    query_params: SessionControllerCreateLandlordLoginQueryParams = field()
    

@dataclass
class SessionControllerCreateLandlordLoginResponse:
    content_type: str = field()
    status_code: int = field()
    
