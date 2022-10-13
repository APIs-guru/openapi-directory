from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams:
    latitude: int = field(default=None, metadata={'path_param': { 'field_name': 'latitude', 'style': 'simple', 'explode': False }})
    longitude: int = field(default=None, metadata={'path_param': { 'field_name': 'longitude', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest:
    path_params: ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams = field(default=None)
    query_params: ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams = field(default=None)
    headers: ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders = field(default=None)
    security: ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity = field(default=None)
    

@dataclass
class ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse:
    content_type: str = field(default=None)
    references_airports_nearest_by_latitude_and_longitude_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
