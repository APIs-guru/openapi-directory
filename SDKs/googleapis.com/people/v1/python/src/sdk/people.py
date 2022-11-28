import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class People:
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

    
    def people_people_batch_create_contacts(self, request: operations.PeoplePeopleBatchCreateContactsRequest) -> operations.PeoplePeopleBatchCreateContactsResponse:
        r"""Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/people:batchCreateContacts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleBatchCreateContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchCreateContactsResponse])
                res.batch_create_contacts_response = out

        return res

    
    def people_people_batch_delete_contacts(self, request: operations.PeoplePeopleBatchDeleteContactsRequest) -> operations.PeoplePeopleBatchDeleteContactsResponse:
        r"""Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/people:batchDeleteContacts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleBatchDeleteContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def people_people_batch_update_contacts(self, request: operations.PeoplePeopleBatchUpdateContactsRequest) -> operations.PeoplePeopleBatchUpdateContactsResponse:
        r"""Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/people:batchUpdateContacts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleBatchUpdateContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateContactsResponse])
                res.batch_update_contacts_response = out

        return res

    
    def people_people_connections_list(self, request: operations.PeoplePeopleConnectionsListRequest) -> operations.PeoplePeopleConnectionsListResponse:
        r"""Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason \"EXPIRED_SYNC_TOKEN\". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}/connections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConnectionsResponse])
                res.list_connections_response = out

        return res

    
    def people_people_create_contact(self, request: operations.PeoplePeopleCreateContactRequest) -> operations.PeoplePeopleCreateContactResponse:
        r"""Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/people:createContact"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleCreateContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Person])
                res.person = out

        return res

    
    def people_people_delete_contact(self, request: operations.PeoplePeopleDeleteContactRequest) -> operations.PeoplePeopleDeleteContactResponse:
        r"""Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}:deleteContact", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleDeleteContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def people_people_delete_contact_photo(self, request: operations.PeoplePeopleDeleteContactPhotoRequest) -> operations.PeoplePeopleDeleteContactPhotoResponse:
        r"""Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}:deleteContactPhoto", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleDeleteContactPhotoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteContactPhotoResponse])
                res.delete_contact_photo_response = out

        return res

    
    def people_people_get(self, request: operations.PeoplePeopleGetRequest) -> operations.PeoplePeopleGetResponse:
        r"""Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Person])
                res.person = out

        return res

    
    def people_people_get_batch_get(self, request: operations.PeoplePeopleGetBatchGetRequest) -> operations.PeoplePeopleGetBatchGetResponse:
        r"""Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/people:batchGet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleGetBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPeopleResponse])
                res.get_people_response = out

        return res

    
    def people_people_list_directory_people(self, request: operations.PeoplePeopleListDirectoryPeopleRequest) -> operations.PeoplePeopleListDirectoryPeopleResponse:
        r"""Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/people:listDirectoryPeople"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleListDirectoryPeopleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDirectoryPeopleResponse])
                res.list_directory_people_response = out

        return res

    
    def people_people_search_contacts(self, request: operations.PeoplePeopleSearchContactsRequest) -> operations.PeoplePeopleSearchContactsResponse:
        r"""Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/people:searchContacts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleSearchContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out

        return res

    
    def people_people_search_directory_people(self, request: operations.PeoplePeopleSearchDirectoryPeopleRequest) -> operations.PeoplePeopleSearchDirectoryPeopleResponse:
        r"""Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/people:searchDirectoryPeople"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleSearchDirectoryPeopleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchDirectoryPeopleResponse])
                res.search_directory_people_response = out

        return res

    
    def people_people_update_contact(self, request: operations.PeoplePeopleUpdateContactRequest) -> operations.PeoplePeopleUpdateContactResponse:
        r"""Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `\"failedPrecondition\"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}:updateContact", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleUpdateContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Person])
                res.person = out

        return res

    
    def people_people_update_contact_photo(self, request: operations.PeoplePeopleUpdateContactPhotoRequest) -> operations.PeoplePeopleUpdateContactPhotoResponse:
        r"""Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}:updateContactPhoto", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeoplePeopleUpdateContactPhotoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateContactPhotoResponse])
                res.update_contact_photo_response = out

        return res

    