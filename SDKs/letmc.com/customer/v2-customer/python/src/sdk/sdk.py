

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://live-api.letmc.com",
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
        
    
    
    
    def branch_controller_get_branches(self, request: operations.BranchControllerGetBranchesRequest) -> operations.BranchControllerGetBranchesResponse:
        r"""All branches defined for a company
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/branch/branches", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BranchControllerGetBranchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BranchModelResults])
                res.branch_model_results = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BranchModelResults])
                res.branch_model_results = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_v2_customer_short_name_branch_branches_branch_id_(self, request: operations.GetV2CustomerShortNameBranchBranchesBranchIDRequest) -> operations.GetV2CustomerShortNameBranchBranchesBranchIDResponse:
        r"""Get a specific branch given its unique Object ID (OID)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/branch/branches/{branchID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV2CustomerShortNameBranchBranchesBranchIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BranchModel])
                res.branch_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BranchModel])
                res.branch_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_create_maintenance_preference(self, request: operations.LandlordControllerCreateMaintenancePreferenceRequest) -> operations.LandlordControllerCreateMaintenancePreferenceResponse:
        r"""Post tenancy maintenance preferences:-
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/tenancy/maintenance/preference", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerCreateMaintenancePreferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.landlord_controller_create_maintenance_preference_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.landlord_controller_create_maintenance_preference_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.landlord_controller_create_maintenance_preference_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.landlord_controller_create_maintenance_preference_200_text_xml_string = r.content

        return res

    
    def landlord_controller_get_accounts(self, request: operations.LandlordControllerGetAccountsRequest) -> operations.LandlordControllerGetAccountsResponse:
        r"""Get the accounting details for the landlord.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/accounting", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordAccountingModel])
                res.landlord_accounting_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordAccountingModel])
                res.landlord_accounting_model = out

        return res

    
    def landlord_controller_get_document(self, request: operations.LandlordControllerGetDocumentRequest) -> operations.LandlordControllerGetDocumentResponse:
        r"""Download a Document
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/document", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_invetory_report(self, request: operations.LandlordControllerGetInvetoryReportRequest) -> operations.LandlordControllerGetInvetoryReportResponse:
        r"""Generate a Inventory PDF for a tenancy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/inventory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetInvetoryReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_invoice(self, request: operations.LandlordControllerGetInvoiceRequest) -> operations.LandlordControllerGetInvoiceResponse:
        r"""Get an invoice pdf belonging to the landlord.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/invoice", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetInvoiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_landlord_crm_entries(self, request: operations.LandlordControllerGetLandlordCrmEntriesRequest) -> operations.LandlordControllerGetLandlordCrmEntriesResponse:
        r"""Retrieve landlord's CRM ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/landlordcrmentries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetLandlordCrmEntriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LandlordCrmEntry]])
                res.landlord_crm_entries = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LandlordCrmEntry]])
                res.landlord_crm_entries = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_maintenance_jobs(self, request: operations.LandlordControllerGetMaintenanceJobsRequest) -> operations.LandlordControllerGetMaintenanceJobsResponse:
        r"""Get Active maintenance jobs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/maintenance", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetMaintenanceJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordMaintenanceModel])
                res.landlord_maintenance_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordMaintenanceModel])
                res.landlord_maintenance_model = out

        return res

    
    def landlord_controller_get_profit_loss_report(self, request: operations.LandlordControllerGetProfitLossReportRequest) -> operations.LandlordControllerGetProfitLossReportResponse:
        r"""Generate a Profit and Loss Report
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/profitloss", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetProfitLossReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordProfitLossModel])
                res.landlord_profit_loss_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordProfitLossModel])
                res.landlord_profit_loss_model = out

        return res

    
    def landlord_controller_get_rent_arrears(self, request: operations.LandlordControllerGetRentArrearsRequest) -> operations.LandlordControllerGetRentArrearsResponse:
        r"""Rent Arrears
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/rentarrears", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetRentArrearsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordRentArrearsModel])
                res.landlord_rent_arrears_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordRentArrearsModel])
                res.landlord_rent_arrears_model = out

        return res

    
    def landlord_controller_get_sas_report(self, request: operations.LandlordControllerGetSasReportRequest) -> operations.LandlordControllerGetSasReportResponse:
        r"""Generate a Self Assessment Tax Report
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/sas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetSasReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def landlord_controller_get_settings(self, request: operations.LandlordControllerGetSettingsRequest) -> operations.LandlordControllerGetSettingsResponse:
        r"""Get contact details of all linked landlords.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/settings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordSettingsModel])
                res.landlord_settings_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordSettingsModel])
                res.landlord_settings_model = out

        return res

    
    def landlord_controller_get_summary_details(self, request: operations.LandlordControllerGetSummaryDetailsRequest) -> operations.LandlordControllerGetSummaryDetailsResponse:
        r"""Get the summary details for the landlord.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetSummaryDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordSummaryModel])
                res.landlord_summary_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordSummaryModel])
                res.landlord_summary_model = out

        return res

    
    def landlord_controller_get_tenancy(self, request: operations.LandlordControllerGetTenancyRequest) -> operations.LandlordControllerGetTenancyResponse:
        r"""Get tenancy details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/tenancy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetTenancyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordTenancyModel])
                res.landlord_tenancy_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordTenancyModel])
                res.landlord_tenancy_model = out

        return res

    
    def landlord_controller_get_tenancy_agreement_report(self, request: operations.LandlordControllerGetTenancyAgreementReportRequest) -> operations.LandlordControllerGetTenancyAgreementReportResponse:
        r"""Generate a Tenancy Agreement Copy (PDF)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/landlord/tenancyagreement", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LandlordControllerGetTenancyAgreementReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def photo_controller_get_photo_download(self, request: operations.PhotoControllerGetPhotoDownloadRequest) -> operations.PhotoControllerGetPhotoDownloadResponse:
        r"""Downloads the photo of a property given the photo ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/photo/download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PhotoControllerGetPhotoDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def property_controller_get_properties_photos(self, request: operations.PropertyControllerGetPropertiesPhotosRequest) -> operations.PropertyControllerGetPropertiesPhotosResponse:
        r"""A collection showing all the photos linked to a specific block, property or room
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/property/{propertyID}/photos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PropertyControllerGetPropertiesPhotosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordPhotoModelResults])
                res.landlord_photo_model_results = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LandlordPhotoModelResults])
                res.landlord_photo_model_results = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def session_controller_change_password(self, request: operations.SessionControllerChangePasswordRequest) -> operations.SessionControllerChangePasswordResponse:
        r"""Change the password of a customer given their existing and new password.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session/password", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerChangePasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def session_controller_create_landlord_login(self, request: operations.SessionControllerCreateLandlordLoginRequest) -> operations.SessionControllerCreateLandlordLoginResponse:
        r"""Send a request to the in-tray to create a landlord login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session/createlandlordlogin", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerCreateLandlordLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def session_controller_get_session_info(self, request: operations.SessionControllerGetSessionInfoRequest) -> operations.SessionControllerGetSessionInfoResponse:
        r"""Gets information about the currently logged on customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerGetSessionInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.session_controller_get_session_info_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.session_controller_get_session_info_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.session_controller_get_session_info_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.session_controller_get_session_info_200_text_xml_string = r.content

        return res

    
    def session_controller_login(self, request: operations.SessionControllerLoginRequest) -> operations.SessionControllerLoginResponse:
        r"""Login as a customer given their username and password.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.session_controller_login_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.session_controller_login_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.session_controller_login_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.session_controller_login_200_text_xml_string = r.content

        return res

    
    def session_controller_logout(self, request: operations.SessionControllerLogoutRequest) -> operations.SessionControllerLogoutResponse:
        r"""Logout a customer previously logged in via the Login endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerLogoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def session_controller_reset_password(self, request: operations.SessionControllerResetPasswordRequest) -> operations.SessionControllerResetPasswordResponse:
        r"""Reset the customer's password. An email will be sent out to reset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session/resetpassword", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerResetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    