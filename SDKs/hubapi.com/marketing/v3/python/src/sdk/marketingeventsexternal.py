import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MarketingEventsExternal:
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

    
    def delete_marketing_v3_marketing_events_events_external_event_id_archive(self, request: operations.DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveRequest) -> operations.DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/events/{externalEventId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_marketing_v3_marketing_events_events_search_do_search(self, request: operations.GetMarketingV3MarketingEventsEventsSearchDoSearchRequest) -> operations.GetMarketingV3MarketingEventsEventsSearchDoSearchResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/marketing/v3/marketing-events/events/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMarketingV3MarketingEventsEventsSearchDoSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging])
                res.collection_response_marketing_event_external_unique_identifier_no_paging = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_marketing_v3_marketing_events_events_external_event_id_get_by_id(self, request: operations.GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDRequest) -> operations.GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/events/{externalEventId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarketingEventPublicReadResponse])
                res.marketing_event_public_read_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_marketing_v3_marketing_events_events_external_event_id_update(self, request: operations.PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateRequest) -> operations.PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/events/{externalEventId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarketingEventPublicDefaultResponse])
                res.marketing_event_public_default_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_marketing_v3_marketing_events_events_delete_archive_batch(self, request: operations.PostMarketingV3MarketingEventsEventsDeleteArchiveBatchRequest) -> operations.PostMarketingV3MarketingEventsEventsDeleteArchiveBatchResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/marketing/v3/marketing-events/events/delete"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMarketingV3MarketingEventsEventsDeleteArchiveBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_marketing_v3_marketing_events_events_upsert_do_upsert(self, request: operations.PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest) -> operations.PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/marketing/v3/marketing-events/events/upsert"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchResponseMarketingEventPublicDefaultResponse])
                res.batch_response_marketing_event_public_default_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_marketing_v3_marketing_events_events_external_event_id_cancel_do_cancel(self, request: operations.PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelRequest) -> operations.PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/events/{externalEventId}/cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarketingEventDefaultResponse])
                res.marketing_event_default_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_marketing_v3_marketing_events_events_external_event_id_complete_complete(self, request: operations.PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteRequest) -> operations.PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/events/{externalEventId}/complete", request.path_params)
        
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

        res = operations.PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarketingEventDefaultResponse])
                res.marketing_event_default_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_marketing_v3_marketing_events_events_external_event_id_subscriber_state_email_upsert_do_email_upsert_by_id(self, request: operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDRequest) -> operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/events/{externalEventId}/{subscriberState}/email-upsert", request.path_params)
        
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

        res = operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_marketing_v3_marketing_events_events_external_event_id_subscriber_state_upsert_do_upsert_by_id(self, request: operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDRequest) -> operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/events/{externalEventId}/{subscriberState}/upsert", request.path_params)
        
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

        res = operations.PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_marketing_v3_marketing_events_events_create(self, request: operations.PostMarketingV3MarketingEventsEventsCreateRequest) -> operations.PostMarketingV3MarketingEventsEventsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/marketing/v3/marketing-events/events"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMarketingV3MarketingEventsEventsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarketingEventDefaultResponse])
                res.marketing_event_default_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def put_marketing_v3_marketing_events_events_external_event_id_replace(self, request: operations.PutMarketingV3MarketingEventsEventsExternalEventIDReplaceRequest) -> operations.PutMarketingV3MarketingEventsEventsExternalEventIDReplaceResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/events/{externalEventId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMarketingV3MarketingEventsEventsExternalEventIDReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarketingEventPublicDefaultResponse])
                res.marketing_event_public_default_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    