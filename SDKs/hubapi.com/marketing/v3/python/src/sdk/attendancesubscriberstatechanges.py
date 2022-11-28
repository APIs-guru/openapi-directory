import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AttendanceSubscriberStateChanges:
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

    
    def post_marketing_v3_marketing_events_attendance_external_event_id_subscriber_state_create_create(self, request: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest) -> operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateResponse:
        r"""Record
        Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/create", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchResponseSubscriberVidResponse])
                res.batch_response_subscriber_vid_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_marketing_v3_marketing_events_attendance_external_event_id_subscriber_state_email_create_create_by_email(self, request: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailRequest) -> operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailResponse:
        r"""Record
        Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/email-create", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchResponseSubscriberEmailResponse])
                res.batch_response_subscriber_email_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    