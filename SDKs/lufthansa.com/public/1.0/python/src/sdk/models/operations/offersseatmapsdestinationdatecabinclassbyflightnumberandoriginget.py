from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams:
    cabin_class: str = field(default=None, metadata={'path_param': { 'field_name': 'cabinClass', 'style': 'simple', 'explode': False }})
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    destination: str = field(default=None, metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    flight_number: str = field(default=None, metadata={'path_param': { 'field_name': 'flightNumber', 'style': 'simple', 'explode': False }})
    origin: str = field(default=None, metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest:
    path_params: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams = field(default=None)
    headers: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders = field(default=None)
    security: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity = field(default=None)
    

@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse:
    content_type: str = field(default=None)
    offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
