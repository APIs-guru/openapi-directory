import warnings
import requests
from typing import Any,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.lufthansa.com/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def cargo_get_route_from_date_product_code_by_origin_and_destination_get(self, request: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest) -> operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cargo_get_route_from_date_product_code_by_origin_and_destination_get_200_application_json_object = out

        return res

    
    
    def cargo_shipment_tracking_by_awb_prefix_and_awb_number_get(self, request: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest) -> operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cargo_shipment_tracking_by_awb_prefix_and_awb_number_get_200_application_json_object = out

        return res

    
    
    def offers_lounges_by_location_get(self, request: operations.OffersLoungesByLocationGetRequest) -> operations.OffersLoungesByLocationGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/offers/lounges/{location}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OffersLoungesByLocationGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.offers_lounges_by_location_get_200_application_json_object = out

        return res

    
    
    def offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get(self, request: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest) -> operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get_200_application_json_object = out

        return res

    
    
    def operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get(self, request: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest) -> operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/operations/flightstatus/arrivals/{airportCode}/{fromDateTime}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get_200_application_json_object = out

        return res

    
    
    def operations_flightstatus_by_flight_number_and_date_get(self, request: operations.OperationsFlightstatusByFlightNumberAndDateGetRequest) -> operations.OperationsFlightstatusByFlightNumberAndDateGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/operations/flightstatus/{flightNumber}/{date}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsFlightstatusByFlightNumberAndDateGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_flightstatus_by_flight_number_and_date_get_200_application_json_object = out

        return res

    
    
    def operations_flightstatus_departures_by_airport_code_and_from_date_time_get(self, request: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest) -> operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/operations/flightstatus/departures/{airportCode}/{fromDateTime}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_flightstatus_departures_by_airport_code_and_from_date_time_get_200_application_json_object = out

        return res

    
    
    def operations_flightstatus_route_date_by_origin_and_destination_get(self, request: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest) -> operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/operations/flightstatus/route/{origin}/{destination}/{date}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_flightstatus_route_date_by_origin_and_destination_get_200_application_json_object = out

        return res

    
    
    def operations_schedules_from_date_time_by_origin_and_destination_get(self, request: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest) -> operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/operations/schedules/{origin}/{destination}/{fromDateTime}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.operations_schedules_from_date_time_by_origin_and_destination_get_200_application_json_object = out

        return res

    
    
    def references_aircraft_by_aircraft_code_get(self, request: operations.ReferencesAircraftByAircraftCodeGetRequest) -> operations.ReferencesAircraftByAircraftCodeGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/references/aircraft/{aircraftCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesAircraftByAircraftCodeGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_aircraft_by_aircraft_code_get_200_application_json_object = out

        return res

    
    
    def references_airlines_by_airline_code_get(self, request: operations.ReferencesAirlinesByAirlineCodeGetRequest) -> operations.ReferencesAirlinesByAirlineCodeGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/references/airlines/{airlineCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesAirlinesByAirlineCodeGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_airlines_by_airline_code_get_200_application_json_object = out

        return res

    
    
    def references_airports_by_airport_code_get(self, request: operations.ReferencesAirportsByAirportCodeGetRequest) -> operations.ReferencesAirportsByAirportCodeGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/references/airports/{airportCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesAirportsByAirportCodeGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AirportResponse])
                res.airport_response = out

        return res

    
    
    def references_airports_nearest_by_latitude_and_longitude_get(self, request: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest) -> operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/references/airports/nearest/{latitude},{longitude}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_airports_nearest_by_latitude_and_longitude_get_200_application_json_object = out

        return res

    
    
    def references_cities_by_city_code_get(self, request: operations.ReferencesCitiesByCityCodeGetRequest) -> operations.ReferencesCitiesByCityCodeGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/references/cities/{cityCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesCitiesByCityCodeGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_cities_by_city_code_get_200_application_json_object = out

        return res

    
    
    def references_countries_by_country_code_get(self, request: operations.ReferencesCountriesByCountryCodeGetRequest) -> operations.ReferencesCountriesByCountryCodeGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/references/countries/{countryCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReferencesCountriesByCountryCodeGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.references_countries_by_country_code_get_200_application_json_object = out

        return res

    