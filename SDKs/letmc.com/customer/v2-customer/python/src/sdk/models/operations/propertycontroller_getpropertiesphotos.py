from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PropertyControllerGetPropertiesPhotosPathParams:
    property_id: str = field(metadata={'path_param': { 'field_name': 'propertyID', 'style': 'simple', 'explode': False }})
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PropertyControllerGetPropertiesPhotosQueryParams:
    count: int = field(metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: int = field(metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class PropertyControllerGetPropertiesPhotosRequest:
    path_params: PropertyControllerGetPropertiesPhotosPathParams = field()
    query_params: PropertyControllerGetPropertiesPhotosQueryParams = field()
    

@dataclass
class PropertyControllerGetPropertiesPhotosResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    landlord_photo_model_results: Optional[shared.LandlordPhotoModelResults] = field(default=None)
    
