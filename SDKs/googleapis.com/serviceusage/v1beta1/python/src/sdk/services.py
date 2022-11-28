import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Services:
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

    
    def serviceusage_services_batch_enable(self, request: operations.ServiceusageServicesBatchEnableRequest) -> operations.ServiceusageServicesBatchEnableResponse:
        r"""Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/services:batchEnable", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesBatchEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_import_admin_overrides(self, request: operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse:
        r"""Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consumerQuotaMetrics:importAdminOverrides", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_import_consumer_overrides(self, request: operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse:
        r"""Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consumerQuotaMetrics:importConsumerOverrides", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_limits_admin_overrides_create(self, request: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse:
        r"""Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/adminOverrides", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_limits_admin_overrides_list(self, request: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse:
        r"""Lists all admin overrides on this limit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/adminOverrides", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAdminOverridesResponse])
                res.list_admin_overrides_response = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_limits_consumer_overrides_create(self, request: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse:
        r"""Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consumerOverrides", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_limits_consumer_overrides_delete(self, request: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse:
        r"""Deletes a consumer override.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_limits_consumer_overrides_list(self, request: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse:
        r"""Lists all consumer overrides on this limit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consumerOverrides", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConsumerOverridesResponse])
                res.list_consumer_overrides_response = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_limits_consumer_overrides_patch(self, request: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse:
        r"""Updates a consumer override.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_limits_get(self, request: operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse:
        r"""Retrieves a summary of quota information for a specific quota limit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsumerQuotaLimit])
                res.consumer_quota_limit = out

        return res

    
    def serviceusage_services_consumer_quota_metrics_list(self, request: operations.ServiceusageServicesConsumerQuotaMetricsListRequest) -> operations.ServiceusageServicesConsumerQuotaMetricsListResponse:
        r"""Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consumerQuotaMetrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesConsumerQuotaMetricsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConsumerQuotaMetricsResponse])
                res.list_consumer_quota_metrics_response = out

        return res

    
    def serviceusage_services_disable(self, request: operations.ServiceusageServicesDisableRequest) -> operations.ServiceusageServicesDisableResponse:
        r"""Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:disable", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_enable(self, request: operations.ServiceusageServicesEnableRequest) -> operations.ServiceusageServicesEnableResponse:
        r"""Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:enable", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_generate_service_identity(self, request: operations.ServiceusageServicesGenerateServiceIdentityRequest) -> operations.ServiceusageServicesGenerateServiceIdentityResponse:
        r"""Generates service identity for service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}:generateServiceIdentity", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesGenerateServiceIdentityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def serviceusage_services_list(self, request: operations.ServiceusageServicesListRequest) -> operations.ServiceusageServicesListResponse:
        r"""Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServiceusageServicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServicesResponse])
                res.list_services_response = out

        return res

    