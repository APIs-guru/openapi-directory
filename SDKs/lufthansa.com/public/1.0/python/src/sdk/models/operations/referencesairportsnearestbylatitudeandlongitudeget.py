from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams:
    latitude: int = field(metadata={'path_param': { 'field_name': 'latitude', 'style': 'simple', 'explode': False }})
    longitude: int = field(metadata={'path_param': { 'field_name': 'longitude', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest:
    headers: ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders = field()
    path_params: ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams = field()
    query_params: ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams = field()
    security: ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity = field()
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse:
    content_type: str = field()
    status_code: int = field()
    references_airports_nearest_by_latitude_and_longitude_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
