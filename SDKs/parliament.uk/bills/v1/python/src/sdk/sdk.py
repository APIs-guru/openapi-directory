

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://bills-api.parliament.uk",
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
        
    
    
    
    def get_api_v1_bill_types(self, request: operations.GetAPIV1BillTypesRequest) -> operations.GetAPIV1BillTypesResponse:
        r"""Returns a list of Bill types.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/BillTypes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1BillTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillTypeSearchResult])
                res.bill_type_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillTypeSearchResult])
                res.bill_type_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_bills_bill_id_stages(self, request: operations.GetAPIV1BillsBillIDStagesRequest) -> operations.GetAPIV1BillsBillIDStagesResponse:
        r"""Returns all Bill stages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Bills/{billId}/Stages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1BillsBillIDStagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StageSummarySearchResult])
                res.stage_summary_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StageSummarySearchResult])
                res.stage_summary_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_bills_bill_id_stages_stage_id_publications(self, request: operations.GetAPIV1BillsBillIDStagesStageIDPublicationsRequest) -> operations.GetAPIV1BillsBillIDStagesStageIDPublicationsResponse:
        r"""Return a list of Bill stage publications.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Bills/{billId}/Stages/{stageId}/Publications", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1BillsBillIDStagesStageIDPublicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillStagePublicationList])
                res.bill_stage_publication_list = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillStagePublicationList])
                res.bill_stage_publication_list = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_publication_types(self, request: operations.GetAPIV1PublicationTypesRequest) -> operations.GetAPIV1PublicationTypesResponse:
        r"""Returns a list of publication types.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/PublicationTypes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1PublicationTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicationTypeSearchResult])
                res.publication_type_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicationTypeSearchResult])
                res.publication_type_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_publications_publication_id_documents_document_id_(self, request: operations.GetAPIV1PublicationsPublicationIDDocumentsDocumentIDRequest) -> operations.GetAPIV1PublicationsPublicationIDDocumentsDocumentIDResponse:
        r"""Return information on a document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Publications/{publicationId}/Documents/{documentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1PublicationsPublicationIDDocumentsDocumentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicationDocument])
                res.publication_document = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicationDocument])
                res.publication_document = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_api_v1_publications_publication_id_documents_document_id_download(self, request: operations.GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadRequest) -> operations.GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadResponse:
        r"""Return a document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Publications/{publicationId}/Documents/{documentId}/Download", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_api_v1_rss_bills_id_rss(self, request: operations.GetAPIV1RssBillsIDRssRequest) -> operations.GetAPIV1RssBillsIDRssResponse:
        r"""Returns an Rss feed of a certain Bill.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Rss/Bills/{id}.rss", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1RssBillsIDRssResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_api_v1_rss_allbills_rss(self) -> operations.GetAPIV1RssAllbillsRssResponse:
        r"""Returns an Rss feed of all Bills.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Rss/allbills.rss"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1RssAllbillsRssResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_v1_rss_privatebills_rss(self) -> operations.GetAPIV1RssPrivatebillsRssResponse:
        r"""Returns an Rss feed of private Bills.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Rss/privatebills.rss"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1RssPrivatebillsRssResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_v1_rss_publicbills_rss(self) -> operations.GetAPIV1RssPublicbillsRssResponse:
        r"""Returns an Rss feed of public Bills.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Rss/publicbills.rss"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1RssPublicbillsRssResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_v1_stages(self, request: operations.GetAPIV1StagesRequest) -> operations.GetAPIV1StagesResponse:
        r"""Returns a list of Bill stages.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Stages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1StagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StageReferenceSearchResult])
                res.stage_reference_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StageReferenceSearchResult])
                res.stage_reference_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_amendment(self, request: operations.GetAmendmentRequest) -> operations.GetAmendmentResponse:
        r"""Returns an amendment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Bills/{billId}/Stages/{billStageId}/Amendments/{amendmentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAmendmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AmendmentDetail])
                res.amendment_detail = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AmendmentDetail])
                res.amendment_detail = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_amendments(self, request: operations.GetAmendmentsRequest) -> operations.GetAmendmentsResponse:
        r"""Returns a list of amendments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Bills/{billId}/Stages/{billStageId}/Amendments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAmendmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AmendmentSearchItemSearchResult])
                res.amendment_search_item_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AmendmentSearchItemSearchResult])
                res.amendment_search_item_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_bill(self, request: operations.GetBillRequest) -> operations.GetBillResponse:
        r"""Return a Bill.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Bills/{billId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBillResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bill])
                res.bill = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bill])
                res.bill = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_bill_publication(self, request: operations.GetBillPublicationRequest) -> operations.GetBillPublicationResponse:
        r"""Return a list of Bill publications.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Bills/{billId}/Publications", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBillPublicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillPublicationList])
                res.bill_publication_list = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillPublicationList])
                res.bill_publication_list = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_bill_stage_details(self, request: operations.GetBillStageDetailsRequest) -> operations.GetBillStageDetailsResponse:
        r"""Returns a Bill stage.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Bills/{billId}/Stages/{billStageId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBillStageDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillStageDetails])
                res.bill_stage_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillStageDetails])
                res.bill_stage_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_bills(self, request: operations.GetBillsRequest) -> operations.GetBillsResponse:
        r"""Returns a list of Bills.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Bills"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBillsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillSummarySearchResult])
                res.bill_summary_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillSummarySearchResult])
                res.bill_summary_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_news_articles(self, request: operations.GetNewsArticlesRequest) -> operations.GetNewsArticlesResponse:
        r"""Returns a list of news articles for a Bill.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/Bills/{billId}/NewsArticles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNewsArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NewsArticlesSummarySearchResult])
                res.news_articles_summary_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NewsArticlesSummarySearchResult])
                res.news_articles_summary_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_sittings(self, request: operations.GetSittingsRequest) -> operations.GetSittingsResponse:
        r"""Returns a list of Sittings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/Sittings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSittingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillStageSittingSearchResult])
                res.bill_stage_sitting_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillStageSittingSearchResult])
                res.bill_stage_sitting_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    