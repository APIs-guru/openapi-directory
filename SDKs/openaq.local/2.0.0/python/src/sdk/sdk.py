

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://openaq.local",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def averages_v2_get_v2_averages_get(self, request: operations.AveragesV2GetV2AveragesGetRequest) -> operations.AveragesV2GetV2AveragesGetResponse:
        r"""Averages V2 Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/averages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AveragesV2GetV2AveragesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def cities_get_v2_cities_get(self, request: operations.CitiesGetV2CitiesGetRequest) -> operations.CitiesGetV2CitiesGetResponse:
        r"""Provides a simple listing of cities within the platform
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/cities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CitiesGetV2CitiesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqCitiesResult])
                res.open_aq_cities_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def cities_getv1_v1_cities_get(self, request: operations.CitiesGetv1V1CitiesGetRequest) -> operations.CitiesGetv1V1CitiesGetResponse:
        r"""Provides a simple listing of cities within the platform
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/cities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CitiesGetv1V1CitiesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqCitiesResult])
                res.open_aq_cities_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def countries_get_v1_countries_country_id_get(self, request: operations.CountriesGetV1CountriesCountryIDGetRequest) -> operations.CountriesGetV1CountriesCountryIDGetResponse:
        r"""Countries Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/countries/{country_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CountriesGetV1CountriesCountryIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqCountriesResult])
                res.open_aq_countries_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def countries_get_v2_countries_country_id_get(self, request: operations.CountriesGetV2CountriesCountryIDGetRequest) -> operations.CountriesGetV2CountriesCountryIDGetResponse:
        r"""Countries Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/countries/{country_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CountriesGetV2CountriesCountryIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqCountriesResult])
                res.open_aq_countries_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def countries_get_v2_countries_get(self, request: operations.CountriesGetV2CountriesGetRequest) -> operations.CountriesGetV2CountriesGetResponse:
        r"""Countries Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/countries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CountriesGetV2CountriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqCountriesResult])
                res.open_aq_countries_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def countries_getv1_v1_countries_get(self, request: operations.CountriesGetv1V1CountriesGetRequest) -> operations.CountriesGetv1V1CountriesGetResponse:
        r"""Countries Getv1
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/countries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CountriesGetv1V1CountriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqCountriesResult])
                res.open_aq_countries_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def demo_v2_locations_tiles_viewer_get(self) -> operations.DemoV2LocationsTilesViewerGetResponse:
        r"""Demo
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/locations/tiles/viewer"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DemoV2LocationsTilesViewerGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/html"):
                res.demo_v2_locations_tiles_viewer_get_200_text_html_string = r.content

        return res

    
    def favico_favicon_ico_get(self) -> operations.FavicoFaviconIcoGetResponse:
        r"""Favico
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/favicon.ico"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FavicoFaviconIcoGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.favico_favicon_ico_get_200_application_json_any = out

        return res

    
    def get_mobilegentile_v2_locations_tiles_mobile_generalized_z_x_y_pbf_get(self, request: operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest) -> operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse:
        r"""Get Mobilegentile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/locations/tiles/mobile-generalized/{z}/{x}/{y}.pbf", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_mobiletile_v2_locations_tiles_mobile_z_x_y_pbf_get(self, request: operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest) -> operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse:
        r"""Get Mobiletile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/locations/tiles/mobile/{z}/{x}/{y}.pbf", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_tile_v2_locations_tiles_z_x_y_pbf_get(self, request: operations.GetTileV2LocationsTilesZXYPbfGetRequest) -> operations.GetTileV2LocationsTilesZXYPbfGetResponse:
        r"""Get Tile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/locations/tiles/{z}/{x}/{y}.pbf", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTileV2LocationsTilesZXYPbfGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def latest_get_v2_latest_location_id_get(self, request: operations.LatestGetV2LatestLocationIDGetRequest) -> operations.LatestGetV2LatestLocationIDGetResponse:
        r"""Latest Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/latest/{location_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LatestGetV2LatestLocationIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def latest_get_v2_latest_get(self, request: operations.LatestGetV2LatestGetRequest) -> operations.LatestGetV2LatestGetResponse:
        r"""Latest Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/latest"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LatestGetV2LatestGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def latest_v1_get_v1_latest_location_id_get(self, request: operations.LatestV1GetV1LatestLocationIDGetRequest) -> operations.LatestV1GetV1LatestLocationIDGetResponse:
        r"""Latest V1 Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/latest/{location_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LatestV1GetV1LatestLocationIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def latest_v1_get_v1_latest_get(self, request: operations.LatestV1GetV1LatestGetRequest) -> operations.LatestV1GetV1LatestGetResponse:
        r"""Latest V1 Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/latest"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LatestV1GetV1LatestGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def locations_get_v2_locations_location_id_get(self, request: operations.LocationsGetV2LocationsLocationIDGetRequest) -> operations.LocationsGetV2LocationsLocationIDGetResponse:
        r"""Locations Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/locations/{location_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LocationsGetV2LocationsLocationIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def locations_get_v2_locations_get(self, request: operations.LocationsGetV2LocationsGetRequest) -> operations.LocationsGetV2LocationsGetResponse:
        r"""Locations Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/locations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LocationsGetV2LocationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def locationsv1_get_v1_locations_location_id_get(self, request: operations.Locationsv1GetV1LocationsLocationIDGetRequest) -> operations.Locationsv1GetV1LocationsLocationIDGetResponse:
        r"""Locationsv1 Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/locations/{location_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Locationsv1GetV1LocationsLocationIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def locationsv1_get_v1_locations_get(self, request: operations.Locationsv1GetV1LocationsGetRequest) -> operations.Locationsv1GetV1LocationsGetResponse:
        r"""Locationsv1 Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/locations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Locationsv1GetV1LocationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def measurements_get_v1_v1_measurements_get(self, request: operations.MeasurementsGetV1V1MeasurementsGetRequest) -> operations.MeasurementsGetV1V1MeasurementsGetResponse:
        r"""Measurements Get V1
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/measurements"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeasurementsGetV1V1MeasurementsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.measurements_get_v1_v1_measurements_get_200_application_json_any = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def measurements_get_v2_measurements_get(self, request: operations.MeasurementsGetV2MeasurementsGetRequest) -> operations.MeasurementsGetV2MeasurementsGetResponse:
        r"""Measurements Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/measurements"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeasurementsGetV2MeasurementsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.measurements_get_v2_measurements_get_200_application_json_any = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def mfr_get_v2_manufacturers_get(self) -> operations.MfrGetV2ManufacturersGetResponse:
        r"""Mfr Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/manufacturers"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MfrGetV2ManufacturersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out

        return res

    
    def mobilegentilejson_v2_locations_tiles_mobile_generalized_tiles_json_get(self) -> operations.MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGetResponse:
        r"""Mobilegentilejson
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/locations/tiles/mobile-generalized/tiles.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TileJSON])
                res.tile_json = out

        return res

    
    def mobiletilejson_v2_locations_tiles_mobile_tiles_json_get(self) -> operations.MobiletilejsonV2LocationsTilesMobileTilesJSONGetResponse:
        r"""Mobiletilejson
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/locations/tiles/mobile/tiles.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MobiletilejsonV2LocationsTilesMobileTilesJSONGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TileJSON])
                res.tile_json = out

        return res

    
    def model_get_v2_models_get(self) -> operations.ModelGetV2ModelsGetResponse:
        r"""Model Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/models"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ModelGetV2ModelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out

        return res

    
    def parameters_get_v2_parameters_get(self, request: operations.ParametersGetV2ParametersGetRequest) -> operations.ParametersGetV2ParametersGetResponse:
        r"""Parameters Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/parameters"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ParametersGetV2ParametersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqParametersResult])
                res.open_aq_parameters_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def parameters_getv1_v1_parameters_get(self, request: operations.ParametersGetv1V1ParametersGetRequest) -> operations.ParametersGetv1V1ParametersGetResponse:
        r"""Parameters Getv1
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/parameters"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ParametersGetv1V1ParametersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqParametersResult])
                res.open_aq_parameters_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def pong_ping_get(self) -> operations.PongPingGetResponse:
        r"""Pong
        Sanity check.
        This will let the user know that the service is operational.
        And this path operation will:
        * show a lifesign
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ping"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PongPingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pong_ping_get_200_application_json_any = out

        return res

    
    def projects_get_v2_projects_project_id_get(self, request: operations.ProjectsGetV2ProjectsProjectIDGetRequest) -> operations.ProjectsGetV2ProjectsProjectIDGetResponse:
        r"""Projects Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/projects/{project_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsGetV2ProjectsProjectIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqProjectsResult])
                res.open_aq_projects_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def projects_get_v2_projects_get(self, request: operations.ProjectsGetV2ProjectsGetRequest) -> operations.ProjectsGetV2ProjectsGetResponse:
        r"""Projects Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/projects"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsGetV2ProjectsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqProjectsResult])
                res.open_aq_projects_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def readme_get_v2_sources_readme_slug_get(self, request: operations.ReadmeGetV2SourcesReadmeSlugGetRequest) -> operations.ReadmeGetV2SourcesReadmeSlugGetResponse:
        r"""Readme Get
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/sources/readme/{slug}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReadmeGetV2SourcesReadmeSlugGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.readme_get_v2_sources_readme_slug_get_200_application_json_any = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def sources_get_v2_sources_get(self, request: operations.SourcesGetV2SourcesGetRequest) -> operations.SourcesGetV2SourcesGetResponse:
        r"""Sources Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/sources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SourcesGetV2SourcesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def sources_v1_get_v1_sources_get(self, request: operations.SourcesV1GetV1SourcesGetRequest) -> operations.SourcesV1GetV1SourcesGetResponse:
        r"""Sources V1 Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/sources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SourcesV1GetV1SourcesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def summary_get_v2_summary_get(self) -> operations.SummaryGetV2SummaryGetResponse:
        r"""Summary Get
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/summary"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SummaryGetV2SummaryGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenAqResult])
                res.open_aq_result = out

        return res

    
    def tilejson_v2_locations_tiles_tiles_json_get(self) -> operations.TilejsonV2LocationsTilesTilesJSONGetResponse:
        r"""Tilejson
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/locations/tiles/tiles.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TilejsonV2LocationsTilesTilesJSONGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TileJSON])
                res.tile_json = out

        return res

    