from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SessionControllerCreateLandlordLoginPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerCreateLandlordLoginQueryParams:
    branch_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'branchID', 'style': 'form', 'explode': True }})
    contact_details: str = field(default=None, metadata={'query_param': { 'field_name': 'contactDetails', 'style': 'form', 'explode': True }})
    email: str = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    forename: str = field(default=None, metadata={'query_param': { 'field_name': 'forename', 'style': 'form', 'explode': True }})
    property_address: str = field(default=None, metadata={'query_param': { 'field_name': 'propertyAddress', 'style': 'form', 'explode': True }})
    surname: str = field(default=None, metadata={'query_param': { 'field_name': 'surname', 'style': 'form', 'explode': True }})
    title: str = field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerCreateLandlordLoginRequest:
    path_params: SessionControllerCreateLandlordLoginPathParams = field(default=None)
    query_params: SessionControllerCreateLandlordLoginQueryParams = field(default=None)
    

@dataclass
class SessionControllerCreateLandlordLoginResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
