import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def monitoring_projects_alert_policies_create(self, request: operations.MonitoringProjectsAlertPoliciesCreateRequest) -> operations.MonitoringProjectsAlertPoliciesCreateResponse:
        r"""Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/alertPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsAlertPoliciesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertPolicy])
                res.alert_policy = out

        return res

    
    def monitoring_projects_alert_policies_list(self, request: operations.MonitoringProjectsAlertPoliciesListRequest) -> operations.MonitoringProjectsAlertPoliciesListResponse:
        r"""Lists the existing alerting policies for the workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/alertPolicies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsAlertPoliciesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAlertPoliciesResponse])
                res.list_alert_policies_response = out

        return res

    
    def monitoring_projects_collectd_time_series_create(self, request: operations.MonitoringProjectsCollectdTimeSeriesCreateRequest) -> operations.MonitoringProjectsCollectdTimeSeriesCreateResponse:
        r"""Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/collectdTimeSeries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsCollectdTimeSeriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateCollectdTimeSeriesResponse])
                res.create_collectd_time_series_response = out

        return res

    
    def monitoring_projects_groups_create(self, request: operations.MonitoringProjectsGroupsCreateRequest) -> operations.MonitoringProjectsGroupsCreateResponse:
        r"""Creates a new group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/groups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Group])
                res.group = out

        return res

    
    def monitoring_projects_groups_list(self, request: operations.MonitoringProjectsGroupsListRequest) -> operations.MonitoringProjectsGroupsListResponse:
        r"""Lists the existing groups.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGroupsResponse])
                res.list_groups_response = out

        return res

    
    def monitoring_projects_groups_members_list(self, request: operations.MonitoringProjectsGroupsMembersListRequest) -> operations.MonitoringProjectsGroupsMembersListResponse:
        r"""Lists the monitored resources that are members of a group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsGroupsMembersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGroupMembersResponse])
                res.list_group_members_response = out

        return res

    
    def monitoring_projects_groups_update(self, request: operations.MonitoringProjectsGroupsUpdateRequest) -> operations.MonitoringProjectsGroupsUpdateResponse:
        r"""Updates an existing group. You can change any group attributes except name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Group])
                res.group = out

        return res

    
    def monitoring_projects_metric_descriptors_create(self, request: operations.MonitoringProjectsMetricDescriptorsCreateRequest) -> operations.MonitoringProjectsMetricDescriptorsCreateResponse:
        r"""Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/metricDescriptors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsMetricDescriptorsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MetricDescriptor])
                res.metric_descriptor = out

        return res

    
    def monitoring_projects_metric_descriptors_list(self, request: operations.MonitoringProjectsMetricDescriptorsListRequest) -> operations.MonitoringProjectsMetricDescriptorsListResponse:
        r"""Lists metric descriptors that match a filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/metricDescriptors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsMetricDescriptorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMetricDescriptorsResponse])
                res.list_metric_descriptors_response = out

        return res

    
    def monitoring_projects_monitored_resource_descriptors_list(self, request: operations.MonitoringProjectsMonitoredResourceDescriptorsListRequest) -> operations.MonitoringProjectsMonitoredResourceDescriptorsListResponse:
        r"""Lists monitored resource descriptors that match a filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/monitoredResourceDescriptors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsMonitoredResourceDescriptorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMonitoredResourceDescriptorsResponse])
                res.list_monitored_resource_descriptors_response = out

        return res

    
    def monitoring_projects_notification_channel_descriptors_list(self, request: operations.MonitoringProjectsNotificationChannelDescriptorsListRequest) -> operations.MonitoringProjectsNotificationChannelDescriptorsListResponse:
        r"""Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/notificationChannelDescriptors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsNotificationChannelDescriptorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNotificationChannelDescriptorsResponse])
                res.list_notification_channel_descriptors_response = out

        return res

    
    def monitoring_projects_notification_channels_create(self, request: operations.MonitoringProjectsNotificationChannelsCreateRequest) -> operations.MonitoringProjectsNotificationChannelsCreateResponse:
        r"""Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/notificationChannels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsNotificationChannelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationChannel])
                res.notification_channel = out

        return res

    
    def monitoring_projects_notification_channels_get_verification_code(self, request: operations.MonitoringProjectsNotificationChannelsGetVerificationCodeRequest) -> operations.MonitoringProjectsNotificationChannelsGetVerificationCodeResponse:
        r"""Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as \"G-123456\") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:getVerificationCode", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsNotificationChannelsGetVerificationCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetNotificationChannelVerificationCodeResponse])
                res.get_notification_channel_verification_code_response = out

        return res

    
    def monitoring_projects_notification_channels_list(self, request: operations.MonitoringProjectsNotificationChannelsListRequest) -> operations.MonitoringProjectsNotificationChannelsListResponse:
        r"""Lists the notification channels that have been created for the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/notificationChannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsNotificationChannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNotificationChannelsResponse])
                res.list_notification_channels_response = out

        return res

    
    def monitoring_projects_notification_channels_send_verification_code(self, request: operations.MonitoringProjectsNotificationChannelsSendVerificationCodeRequest) -> operations.MonitoringProjectsNotificationChannelsSendVerificationCodeResponse:
        r"""Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:sendVerificationCode", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsNotificationChannelsSendVerificationCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def monitoring_projects_notification_channels_verify(self, request: operations.MonitoringProjectsNotificationChannelsVerifyRequest) -> operations.MonitoringProjectsNotificationChannelsVerifyResponse:
        r"""Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:verify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsNotificationChannelsVerifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationChannel])
                res.notification_channel = out

        return res

    
    def monitoring_projects_time_series_create(self, request: operations.MonitoringProjectsTimeSeriesCreateRequest) -> operations.MonitoringProjectsTimeSeriesCreateResponse:
        r"""Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/timeSeries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsTimeSeriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def monitoring_projects_time_series_create_service(self, request: operations.MonitoringProjectsTimeSeriesCreateServiceRequest) -> operations.MonitoringProjectsTimeSeriesCreateServiceResponse:
        r"""Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/timeSeries:createService", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsTimeSeriesCreateServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def monitoring_projects_time_series_list(self, request: operations.MonitoringProjectsTimeSeriesListRequest) -> operations.MonitoringProjectsTimeSeriesListResponse:
        r"""Lists time series that match a filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/timeSeries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsTimeSeriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTimeSeriesResponse])
                res.list_time_series_response = out

        return res

    
    def monitoring_projects_time_series_query(self, request: operations.MonitoringProjectsTimeSeriesQueryRequest) -> operations.MonitoringProjectsTimeSeriesQueryResponse:
        r"""Queries time series using Monitoring Query Language.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/timeSeries:query", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsTimeSeriesQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryTimeSeriesResponse])
                res.query_time_series_response = out

        return res

    
    def monitoring_projects_uptime_check_configs_create(self, request: operations.MonitoringProjectsUptimeCheckConfigsCreateRequest) -> operations.MonitoringProjectsUptimeCheckConfigsCreateResponse:
        r"""Creates a new Uptime check configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/uptimeCheckConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsUptimeCheckConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UptimeCheckConfig])
                res.uptime_check_config = out

        return res

    
    def monitoring_projects_uptime_check_configs_list(self, request: operations.MonitoringProjectsUptimeCheckConfigsListRequest) -> operations.MonitoringProjectsUptimeCheckConfigsListResponse:
        r"""Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/uptimeCheckConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsUptimeCheckConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUptimeCheckConfigsResponse])
                res.list_uptime_check_configs_response = out

        return res

    