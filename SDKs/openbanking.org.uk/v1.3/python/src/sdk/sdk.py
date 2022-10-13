import warnings
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_atms(self, request: operations.GetAtmsRequest) -> operations.GetAtmsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/atms"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAtmsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_atms_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject])
                res.four_hundred_error_object = out
        elif r.status_code == 408:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject])
                res.five_hundred_error_object = out
        elif r.status_code == 503:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAtmsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject])
                res.error_object = out

        return res

    
    
    def get_branches(self, request: operations.GetBranchesRequest) -> operations.GetBranchesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/branches"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBranchesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_branches_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject])
                res.four_hundred_error_object = out
        elif r.status_code == 408:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject])
                res.five_hundred_error_object = out
        elif r.status_code == 503:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranchesDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject])
                res.error_object = out

        return res

    
    
    def get_business_current_accounts(self, request: operations.GetBusinessCurrentAccountsRequest) -> operations.GetBusinessCurrentAccountsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/business-current-accounts"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBusinessCurrentAccountsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_business_current_accounts_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject])
                res.four_hundred_error_object = out
        elif r.status_code == 408:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject])
                res.five_hundred_error_object = out
        elif r.status_code == 503:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBusinessCurrentAccountsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject])
                res.error_object = out

        return res

    
    
    def get_commercial_credit_cards(self, request: operations.GetCommercialCreditCardsRequest) -> operations.GetCommercialCreditCardsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/commercial-credit-cards"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommercialCreditCardsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_commercial_credit_cards_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject])
                res.four_hundred_error_object = out
        elif r.status_code == 408:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject])
                res.five_hundred_error_object = out
        elif r.status_code == 503:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCardsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject])
                res.error_object = out

        return res

    
    
    def get_personal_current_accounts(self, request: operations.GetPersonalCurrentAccountsRequest) -> operations.GetPersonalCurrentAccountsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/personal-current-accounts"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonalCurrentAccountsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_personal_current_accounts_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject])
                res.four_hundred_error_object = out
        elif r.status_code == 408:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject])
                res.five_hundred_error_object = out
        elif r.status_code == 503:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccountsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject])
                res.error_object = out

        return res

    
    
    def get_unsecured_sme_loans(self, request: operations.GetUnsecuredSmeLoansRequest) -> operations.GetUnsecuredSmeLoansResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/unsecured-sme-loans"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUnsecuredSmeLoansResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_unsecured_sme_loans_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUnsecuredSmeLoans400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject])
                res.four_hundred_error_object = out
        elif r.status_code == 408:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUnsecuredSmeLoans408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUnsecuredSmeLoans429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUnsecuredSmeLoans500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject])
                res.five_hundred_error_object = out
        elif r.status_code == 503:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUnsecuredSmeLoans503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUnsecuredSmeLoansDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject])
                res.error_object = out

        return res

    
    
    def head_atms(self, request: operations.HeadAtmsRequest) -> operations.HeadAtmsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/atms"
        
        client = self.client

        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadAtmsResponse(status_code=r.status_code, content_type=content_type)
        if True:
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    
    
    def head_branches(self, request: operations.HeadBranchesRequest) -> operations.HeadBranchesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/branches"
        
        client = self.client

        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadBranchesResponse(status_code=r.status_code, content_type=content_type)
        if True:
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    
    
    def head_business_current_accounts(self, request: operations.HeadBusinessCurrentAccountsRequest) -> operations.HeadBusinessCurrentAccountsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/business-current-accounts"
        
        client = self.client

        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadBusinessCurrentAccountsResponse(status_code=r.status_code, content_type=content_type)
        if True:
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    
    
    def head_commercial_credit_cards(self, request: operations.HeadCommercialCreditCardsRequest) -> operations.HeadCommercialCreditCardsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/commercial-credit-cards"
        
        client = self.client

        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadCommercialCreditCardsResponse(status_code=r.status_code, content_type=content_type)
        if True:
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    
    
    def head_personal_current_accounts(self, request: operations.HeadPersonalCurrentAccountsRequest) -> operations.HeadPersonalCurrentAccountsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/personal-current-accounts"
        
        client = self.client

        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadPersonalCurrentAccountsResponse(status_code=r.status_code, content_type=content_type)
        if True:
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    
    
    def head_unsecured_sme_loans(self, request: operations.HeadUnsecuredSmeLoansRequest) -> operations.HeadUnsecuredSmeLoansResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/unsecured-sme-loans"
        
        client = self.client

        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadUnsecuredSmeLoansResponse(status_code=r.status_code, content_type=content_type)
        if True:
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    