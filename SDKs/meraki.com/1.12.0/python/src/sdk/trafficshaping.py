import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class TrafficShaping:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def create_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Add a custom performance class for an MX network
        Add a custom performance class for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_traffic_shaping_custom_performance_class_201_application_json_object = out

        return res

    
    def delete_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Delete a custom performance class from an MX network
        Delete a custom performance class from an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_network_appliance_traffic_shaping(self, request: operations.GetNetworkApplianceTrafficShapingRequest) -> operations.GetNetworkApplianceTrafficShapingResponse:
        r"""Display the traffic shaping settings for an MX network
        Display the traffic shaping settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Return a custom performance class for an MX network
        Return a custom performance class for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_custom_performance_classes(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse:
        r"""List all custom performance classes for an MX network
        List all custom performance classes for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_custom_performance_classes_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_rules(self, request: operations.GetNetworkApplianceTrafficShapingRulesRequest) -> operations.GetNetworkApplianceTrafficShapingRulesResponse:
        r"""Display the traffic shaping settings rules for an MX network
        Display the traffic shaping settings rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/rules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_uplink_bandwidth(self, request: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest) -> operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse:
        r"""Returns the uplink bandwidth settings for your MX network.
        Returns the uplink bandwidth settings for your MX network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_uplink_selection(self, request: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest) -> operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse:
        r"""Show uplink selection settings for an MX network
        Show uplink selection settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_uplink_selection_200_application_json_object = out

        return res

    
    def get_network_traffic_shaping_application_categories(self, request: operations.GetNetworkTrafficShapingApplicationCategoriesRequest) -> operations.GetNetworkTrafficShapingApplicationCategoriesResponse:
        r"""Returns the application categories for traffic shaping rules.
        Returns the application categories for traffic shaping rules.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficShaping/applicationCategories", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficShapingApplicationCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_shaping_application_categories_200_application_json_object = out

        return res

    
    def get_network_traffic_shaping_dscp_tagging_options(self, request: operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest) -> operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse:
        r"""Returns the available DSCP tagging options for your traffic shaping rules.
        Returns the available DSCP tagging options for your traffic shaping rules.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficShaping/dscpTaggingOptions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_shaping_dscp_tagging_options_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_traffic_shaping_rules(self, request: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest) -> operations.GetNetworkWirelessSsidTrafficShapingRulesResponse:
        r"""Display the traffic shaping settings for a SSID on an MR network
        Display the traffic shaping settings for a SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping(self, request: operations.UpdateNetworkApplianceTrafficShapingRequest) -> operations.UpdateNetworkApplianceTrafficShapingResponse:
        r"""Update the traffic shaping settings for an MX network
        Update the traffic shaping settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Update a custom performance class for an MX network
        Update a custom performance class for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_rules(self, request: operations.UpdateNetworkApplianceTrafficShapingRulesRequest) -> operations.UpdateNetworkApplianceTrafficShapingRulesResponse:
        r"""Update the traffic shaping settings rules for an MX network
        Update the traffic shaping settings rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_uplink_bandwidth(self, request: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest) -> operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse:
        r"""Updates the uplink bandwidth settings for your MX network.
        Updates the uplink bandwidth settings for your MX network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_uplink_selection(self, request: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest) -> operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse:
        r"""Update uplink selection settings for an MX network
        Update uplink selection settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_uplink_selection_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_traffic_shaping_rules(self, request: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest) -> operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse:
        r"""Update the traffic shaping settings for an SSID on an MR network
        Update the traffic shaping settings for an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_traffic_shaping_rules_200_application_json_object = out

        return res

    