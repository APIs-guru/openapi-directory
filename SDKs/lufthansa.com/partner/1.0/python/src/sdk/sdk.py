import warnings
import requests
from sdk.models import operations
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
            
    

    
    def all_fares(self, request: operations.AllFaresRequest) -> operations.AllFaresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/fares/allfares"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AllFaresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.all_fares_200_application_json_string = r.content

        return res

    
    def auto_check_in(self, request: operations.AutoCheckInRequest) -> operations.AutoCheckInResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/preflight/autocheckin/{ticketnumber}", request.path_params)

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AutoCheckInResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.auto_check_in_200_application_json_string = r.content

        return res

    
    def baggage_trip_and_contact(self, request: operations.BaggageTripAndContactRequest) -> operations.BaggageTripAndContactResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/baggage/baggagetripandcontact/{searchID}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaggageTripAndContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.baggage_trip_and_contact_200_application_json_string = r.content

        return res

    
    def best_fares(self, request: operations.BestFaresRequest) -> operations.BestFaresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/fares/bestfares"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BestFaresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.best_fares_200_application_json_string = r.content

        return res

    
    def deep_links(self, request: operations.DeepLinksRequest) -> operations.DeepLinksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/fares/deeplink"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeepLinksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.deep_links_200_application_json_string = r.content

        return res

    
    def fares(self, request: operations.FaresRequest) -> operations.FaresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/fares/fares"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FaresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.fares_200_application_json_string = r.content

        return res

    
    def fares_subscriptions(self, request: operations.FaresSubscriptionsRequest) -> operations.FaresSubscriptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/fares/subscriptions"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FaresSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.fares_subscriptions_200_application_json_string = r.content

        return res

    
    def lh_deep_links_ffp(self, request: operations.LhDeepLinksFfpRequest) -> operations.LhDeepLinksFfpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/fares/deeplink/ffp"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LhDeepLinksFfpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.lh_deep_links_ffp_200_application_json_string = r.content

        return res

    
    def lh_deep_links_itco(self, request: operations.LhDeepLinksItcoRequest) -> operations.LhDeepLinksItcoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/fares/deeplink/itco"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LhDeepLinksItcoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.lh_deep_links_itco_200_application_json_string = r.content

        return res

    
    def lowest_fares(self, request: operations.LowestFaresRequest) -> operations.LowestFaresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/fares/lowestfares"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LowestFaresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.lowest_fares_200_application_json_string = r.content

        return res

    
    def ond_route(self, request: operations.OndRouteRequest) -> operations.OndRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/offers/ond/route/{origin}/{destination}", request.path_params)

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OndRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.ond_route_200_application_json_string = r.content

        return res

    
    def ond_status(self, request: operations.OndStatusRequest) -> operations.OndStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/ond/status"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OndStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.ond_status_200_application_json_string = r.content

        return res

    
    def orders(self, request: operations.OrdersRequest) -> operations.OrdersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/orders/orders/{orderID}/{name}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.orders_200_application_json_string = r.content

        return res

    
    def price_offers(self, request: operations.PriceOffersRequest) -> operations.PriceOffersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/promotions/priceoffers/flights/ond/{origin}/{destination}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PriceOffersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.price_offers_200_application_json_string = r.content

        return res

    
    def seat_details(self, request: operations.SeatDetailsRequest) -> operations.SeatDetailsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/references/seatdetails/{aircraftCode}/{cabinCode}", request.path_params)

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SeatDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.seat_details_200_application_json_string = r.content

        return res

    
    def top_ond(self, request: operations.TopOndRequest) -> operations.TopOndResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/offers/ond/top"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TopOndResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.top_ond_200_application_json_string = r.content

        return res

    