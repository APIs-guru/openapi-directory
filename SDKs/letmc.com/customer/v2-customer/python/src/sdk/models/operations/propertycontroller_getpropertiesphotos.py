from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PropertyControllerGetPropertiesPhotosPathParams:
    property_id: str = field(default=None, metadata={'path_param': { 'field_name': 'propertyID', 'style': 'simple', 'explode': False }})
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PropertyControllerGetPropertiesPhotosQueryParams:
    count: int = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: int = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class PropertyControllerGetPropertiesPhotosRequest:
    path_params: PropertyControllerGetPropertiesPhotosPathParams = field(default=None)
    query_params: PropertyControllerGetPropertiesPhotosQueryParams = field(default=None)
    

@dataclass
class PropertyControllerGetPropertiesPhotosResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    landlord_photo_model_results: Optional[shared.LandlordPhotoModelResults] = field(default=None)
    status_code: int = field(default=None)
    
