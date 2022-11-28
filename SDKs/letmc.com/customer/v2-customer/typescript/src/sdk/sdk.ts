import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://live-api.letmc.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * branchControllerGetBranches - All branches defined for a company
  **/
  branchControllerGetBranches(
    req: operations.BranchControllerGetBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BranchControllerGetBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BranchControllerGetBranchesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/branch/branches", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BranchControllerGetBranchesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchModelResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.branchModelResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV2CustomerShortNameBranchBranchesBranchId - Get a specific branch given its unique Object ID (OID)
  **/
  getV2CustomerShortNameBranchBranchesBranchId(
    req: operations.GetV2CustomerShortNameBranchBranchesBranchIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV2CustomerShortNameBranchBranchesBranchIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV2CustomerShortNameBranchBranchesBranchIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/branch/branches/{branchID}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV2CustomerShortNameBranchBranchesBranchIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.branchModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerCreateMaintenancePreference - Post tenancy maintenance preferences:-
  **/
  landlordControllerCreateMaintenancePreference(
    req: operations.LandlordControllerCreateMaintenancePreferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerCreateMaintenancePreferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerCreateMaintenancePreferenceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/tenancy/maintenance/preference", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerCreateMaintenancePreferenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordControllerCreateMaintenancePreference200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                res.landlordControllerCreateMaintenancePreference200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordControllerCreateMaintenancePreference200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                res.landlordControllerCreateMaintenancePreference200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetAccounts - Get the accounting details for the landlord.
  **/
  landlordControllerGetAccounts(
    req: operations.LandlordControllerGetAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/accounting", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordAccountingModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordAccountingModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetDocument - Download a Document
  **/
  landlordControllerGetDocument(
    req: operations.LandlordControllerGetDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetDocumentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/document", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetInvetoryReport - Generate a Inventory PDF for a tenancy
  **/
  landlordControllerGetInvetoryReport(
    req: operations.LandlordControllerGetInvetoryReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetInvetoryReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetInvetoryReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/inventory", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetInvetoryReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetInvoice - Get an invoice pdf belonging to the landlord.
  **/
  landlordControllerGetInvoice(
    req: operations.LandlordControllerGetInvoiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetInvoiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/invoice", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetInvoiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetLandlordCrmEntries - Retrieve landlord's CRM ID
  **/
  landlordControllerGetLandlordCrmEntries(
    req: operations.LandlordControllerGetLandlordCrmEntriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetLandlordCrmEntriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetLandlordCrmEntriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/landlordcrmentries", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetLandlordCrmEntriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordCrmEntries = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordCrmEntries = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetMaintenanceJobs - Get Active maintenance jobs.
  **/
  landlordControllerGetMaintenanceJobs(
    req: operations.LandlordControllerGetMaintenanceJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetMaintenanceJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetMaintenanceJobsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/maintenance", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetMaintenanceJobsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordMaintenanceModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordMaintenanceModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetProfitLossReport - Generate a Profit and Loss Report
  **/
  landlordControllerGetProfitLossReport(
    req: operations.LandlordControllerGetProfitLossReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetProfitLossReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetProfitLossReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/profitloss", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetProfitLossReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordProfitLossModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordProfitLossModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetRentArrears - Rent Arrears
  **/
  landlordControllerGetRentArrears(
    req: operations.LandlordControllerGetRentArrearsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetRentArrearsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetRentArrearsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/rentarrears", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetRentArrearsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordRentArrearsModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordRentArrearsModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetSasReport - Generate a Self Assessment Tax Report
  **/
  landlordControllerGetSasReport(
    req: operations.LandlordControllerGetSasReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetSasReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetSasReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/sas", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetSasReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetSettings - Get contact details of all linked landlords.
  **/
  landlordControllerGetSettings(
    req: operations.LandlordControllerGetSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/settings", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordSettingsModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordSettingsModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetSummaryDetails - Get the summary details for the landlord.
  **/
  landlordControllerGetSummaryDetails(
    req: operations.LandlordControllerGetSummaryDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetSummaryDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetSummaryDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/summary", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetSummaryDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordSummaryModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordSummaryModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetTenancy - Get tenancy details.
  **/
  landlordControllerGetTenancy(
    req: operations.LandlordControllerGetTenancyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetTenancyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetTenancyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/tenancy", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetTenancyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordTenancyModel = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordTenancyModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * landlordControllerGetTenancyAgreementReport - Generate a Tenancy Agreement Copy (PDF)
  **/
  landlordControllerGetTenancyAgreementReport(
    req: operations.LandlordControllerGetTenancyAgreementReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LandlordControllerGetTenancyAgreementReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LandlordControllerGetTenancyAgreementReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/landlord/tenancyagreement", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LandlordControllerGetTenancyAgreementReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * photoControllerGetPhotoDownload - Downloads the photo of a property given the photo ID.
  **/
  photoControllerGetPhotoDownload(
    req: operations.PhotoControllerGetPhotoDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PhotoControllerGetPhotoDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PhotoControllerGetPhotoDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/photo/download", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PhotoControllerGetPhotoDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.object = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * propertyControllerGetPropertiesPhotos - A collection showing all the photos linked to a specific block, property or room
  **/
  propertyControllerGetPropertiesPhotos(
    req: operations.PropertyControllerGetPropertiesPhotosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PropertyControllerGetPropertiesPhotosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PropertyControllerGetPropertiesPhotosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/property/{propertyID}/photos", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PropertyControllerGetPropertiesPhotosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.landlordPhotoModelResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.landlordPhotoModelResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sessionControllerChangePassword - Change the password of a customer given their existing and new password.
  **/
  sessionControllerChangePassword(
    req: operations.SessionControllerChangePasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerChangePasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerChangePasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/session/password", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "put",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerChangePasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sessionControllerCreateLandlordLogin - Send a request to the in-tray to create a landlord login.
  **/
  sessionControllerCreateLandlordLogin(
    req: operations.SessionControllerCreateLandlordLoginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerCreateLandlordLoginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerCreateLandlordLoginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/session/createlandlordlogin", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerCreateLandlordLoginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sessionControllerGetSessionInfo - Gets information about the currently logged on customer.
  **/
  sessionControllerGetSessionInfo(
    req: operations.SessionControllerGetSessionInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerGetSessionInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerGetSessionInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/session", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerGetSessionInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sessionControllerGetSessionInfo200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                res.sessionControllerGetSessionInfo200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.sessionControllerGetSessionInfo200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                res.sessionControllerGetSessionInfo200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sessionControllerLogin - Login as a customer given their username and password.
  **/
  sessionControllerLogin(
    req: operations.SessionControllerLoginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerLoginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerLoginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/session", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerLoginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sessionControllerLogin200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                res.sessionControllerLogin200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/json`)) {
                res.sessionControllerLogin200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/xml`)) {
                res.sessionControllerLogin200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sessionControllerLogout - Logout a customer previously logged in via the Login endpoint.
  **/
  sessionControllerLogout(
    req: operations.SessionControllerLogoutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerLogoutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerLogoutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/session", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerLogoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sessionControllerResetPassword - Reset the customer's password. An email will be sent out to reset.
  **/
  sessionControllerResetPassword(
    req: operations.SessionControllerResetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerResetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerResetPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customer/{shortName}/session/resetpassword", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerResetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
