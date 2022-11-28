from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams:
    cabin_class: str = field(metadata={'path_param': { 'field_name': 'cabinClass', 'style': 'simple', 'explode': False }})
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    destination: str = field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    flight_number: str = field(metadata={'path_param': { 'field_name': 'flightNumber', 'style': 'simple', 'explode': False }})
    origin: str = field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest:
    headers: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders = field()
    path_params: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams = field()
    security: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity = field()
    

@dataclass
class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse:
    content_type: str = field()
    status_code: int = field()
    offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
