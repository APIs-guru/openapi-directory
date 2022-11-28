import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://demo.orthanc-server.com/",
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
   * deleteChanges - Clear changes
   *
   * Clear the full history stored in the changes log
  **/
  deleteChanges(
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteChangesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/changes";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteExports - Clear exports
   *
   * Clear the full history stored in the exports log
  **/
  deleteExports(
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteExportsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/exports";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteExportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteInstancesId - Delete some instance
   *
   * Delete the DICOM instance whose Orthanc identifier is provided in the URL
  **/
  deleteInstancesId(
    req: operations.DeleteInstancesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInstancesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInstancesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteInstancesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteInstancesIdAttachmentsName - Delete attachment
   *
   * Delete an attachment associated with the given DICOM instance. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
  **/
  deleteInstancesIdAttachmentsName(
    req: operations.DeleteInstancesIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInstancesIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInstancesIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteInstancesIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteInstancesIdMetadataName - Delete metadata
   *
   * Delete some metadata associated with the given DICOM instance. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
  **/
  deleteInstancesIdMetadataName(
    req: operations.DeleteInstancesIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInstancesIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInstancesIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/metadata/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteInstancesIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteModalitiesId - Delete DICOM modality
   *
   * Delete one DICOM modality. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
  **/
  deleteModalitiesId(
    req: operations.DeleteModalitiesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteModalitiesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteModalitiesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteModalitiesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletePatientsId - Delete some patient
   *
   * Delete the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  deletePatientsId(
    req: operations.DeletePatientsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePatientsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePatientsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePatientsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletePatientsIdAttachmentsName - Delete attachment
   *
   * Delete an attachment associated with the given DICOM patient. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
  **/
  deletePatientsIdAttachmentsName(
    req: operations.DeletePatientsIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePatientsIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePatientsIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePatientsIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletePatientsIdMetadataName - Delete metadata
   *
   * Delete some metadata associated with the given DICOM patient. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
  **/
  deletePatientsIdMetadataName(
    req: operations.DeletePatientsIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePatientsIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePatientsIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/metadata/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePatientsIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletePeersId - Delete Orthanc peer
   *
   * Delete one Orthanc peer. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
  **/
  deletePeersId(
    req: operations.DeletePeersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePeersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePeersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/peers/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePeersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteQueriesId - Delete a query
   *
   * Delete the query/retrieve operation whose identifier is provided in the URL
  **/
  deleteQueriesId(
    req: operations.DeleteQueriesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteQueriesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteQueriesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteQueriesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSeriesId - Delete some series
   *
   * Delete the DICOM series whose Orthanc identifier is provided in the URL
  **/
  deleteSeriesId(
    req: operations.DeleteSeriesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSeriesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSeriesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSeriesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSeriesIdAttachmentsName - Delete attachment
   *
   * Delete an attachment associated with the given DICOM series. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
  **/
  deleteSeriesIdAttachmentsName(
    req: operations.DeleteSeriesIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSeriesIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSeriesIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSeriesIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSeriesIdMetadataName - Delete metadata
   *
   * Delete some metadata associated with the given DICOM series. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
  **/
  deleteSeriesIdMetadataName(
    req: operations.DeleteSeriesIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSeriesIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSeriesIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/metadata/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSeriesIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteStudiesId - Delete some study
   *
   * Delete the DICOM study whose Orthanc identifier is provided in the URL
  **/
  deleteStudiesId(
    req: operations.DeleteStudiesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteStudiesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteStudiesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteStudiesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteStudiesIdAttachmentsName - Delete attachment
   *
   * Delete an attachment associated with the given DICOM study. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
  **/
  deleteStudiesIdAttachmentsName(
    req: operations.DeleteStudiesIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteStudiesIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteStudiesIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteStudiesIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteStudiesIdMetadataName - Delete metadata
   *
   * Delete some metadata associated with the given DICOM study. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
  **/
  deleteStudiesIdMetadataName(
    req: operations.DeleteStudiesIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteStudiesIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteStudiesIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/metadata/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteStudiesIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getChanges - List changes
   *
   * Whenever Orthanc receives a new DICOM instance, this event is recorded in the so-called _Changes Log_. This enables remote scripts to react to the arrival of new DICOM resources. A typical application is auto-routing, where an external script waits for a new DICOM instance to arrive into Orthanc, then forward this instance to another modality.
  **/
  getChanges(
    req: operations.GetChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChangesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/changes";
    
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
        const res: operations.GetChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getChanges200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getExports - List exports
   *
   * For medical traceability, Orthanc can be configured to store a log of all the resources that have been exported to remote modalities. In auto-routing scenarios, it is important to prevent this log to grow indefinitely as incoming instances are routed. You can either disable this logging by setting the option `LogExportedResources` to `false` in the configuration file, or periodically clear this log by `DELETE`-ing this URI. This route might be removed in future versions of Orthanc.
  **/
  getExports(
    req: operations.GetExportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/exports";
    
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
        const res: operations.GetExportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getExports200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstances - List the available instances
   *
   * List the Orthanc identifiers of all the available DICOM instances
  **/
  getInstances(
    req: operations.GetInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/instances";
    
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
        const res: operations.GetInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstances200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesId - Get information about some instance
   *
   * Get detailed information about the DICOM instance whose Orthanc identifier is provided in the URL
  **/
  getInstancesId(
    req: operations.GetInstancesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}", req.pathParams);
    
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
        const res: operations.GetInstancesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdAttachments - List attachments
   *
   * Get the list of attachments that are associated with the given instance
  **/
  getInstancesIdAttachments(
    req: operations.GetInstancesIdAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdAttachmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdAttachments200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdAttachmentsName - List operations on attachments
   *
   * Get the list of the operations that are available for attachments associated with the given instance
  **/
  getInstancesIdAttachmentsName(
    req: operations.GetInstancesIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdAttachmentsName200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdAttachmentsNameCompressedData - Get attachment (no decompression)
   *
   * Get the (binary) content of one attachment associated with the given instance. The attachment will not be decompressed if `StorageCompression` is `true`.
  **/
  getInstancesIdAttachmentsNameCompressedData(
    req: operations.GetInstancesIdAttachmentsNameCompressedDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdAttachmentsNameCompressedDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdAttachmentsNameCompressedDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/compressed-data", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdAttachmentsNameCompressedDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getInstancesIdAttachmentsNameCompressedMd5 - Get MD5 of attachment on disk
   *
   * Get the MD5 hash of one attachment associated with the given instance, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
  **/
  getInstancesIdAttachmentsNameCompressedMd5(
    req: operations.GetInstancesIdAttachmentsNameCompressedMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdAttachmentsNameCompressedMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdAttachmentsNameCompressedMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/compressed-md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdAttachmentsNameCompressedMd5Response = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getInstancesIdAttachmentsNameCompressedSize - Get size of attachment on disk
   *
   * Get the size of one attachment associated with the given instance, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
  **/
  getInstancesIdAttachmentsNameCompressedSize(
    req: operations.GetInstancesIdAttachmentsNameCompressedSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdAttachmentsNameCompressedSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdAttachmentsNameCompressedSizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/compressed-size", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdAttachmentsNameCompressedSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getInstancesIdAttachmentsNameData - Get attachment
   *
   * Get the (binary) content of one attachment associated with the given instance
  **/
  getInstancesIdAttachmentsNameData(
    req: operations.GetInstancesIdAttachmentsNameDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdAttachmentsNameDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdAttachmentsNameDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/data", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdAttachmentsNameDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getInstancesIdAttachmentsNameIsCompressed - Is attachment compressed?
   *
   * Test whether the attachment has been stored as a compressed file on the disk.
  **/
  getInstancesIdAttachmentsNameIsCompressed(
    req: operations.GetInstancesIdAttachmentsNameIsCompressedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdAttachmentsNameIsCompressedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdAttachmentsNameIsCompressedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/is-compressed", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdAttachmentsNameIsCompressedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getInstancesIdAttachmentsNameMd5 - Get MD5 of attachment
   *
   * Get the MD5 hash of one attachment associated with the given instance
  **/
  getInstancesIdAttachmentsNameMd5(
    req: operations.GetInstancesIdAttachmentsNameMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdAttachmentsNameMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdAttachmentsNameMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdAttachmentsNameMd5Response = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getInstancesIdAttachmentsNameSize - Get size of attachment
   *
   * Get the size of one attachment associated with the given instance
  **/
  getInstancesIdAttachmentsNameSize(
    req: operations.GetInstancesIdAttachmentsNameSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdAttachmentsNameSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdAttachmentsNameSizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/size", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdAttachmentsNameSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getInstancesIdContent - Get raw tag
   *
   * Get the raw content of one DICOM tag in the hierarchy of DICOM dataset
  **/
  getInstancesIdContent(
    req: operations.GetInstancesIdContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/content", req.pathParams);
    
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
        const res: operations.GetInstancesIdContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getInstancesIdFile - Download DICOM
   *
   * Download one DICOM instance
  **/
  getInstancesIdFile(
    req: operations.GetInstancesIdFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/file", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/dicom`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/dicom+xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/dicom+json`)) {
                res.getInstancesIdFile200ApplicationDicomPlusJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdFrames - List available frames
   *
   * List the frames that are available in the DICOM instance of interest
  **/
  getInstancesIdFrames(
    req: operations.GetInstancesIdFramesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdFrames200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdFramesFrame - List operations
   *
   * List the available operations under URI `/instances/{id}/frames/{frame}/`
  **/
  getInstancesIdFramesFrame(
    req: operations.GetInstancesIdFramesFrameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesFrameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesFrameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames/{frame}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesFrameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdFramesFrame200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdFramesFrameImageInt16 - Decode a frame (int16)
   *
   * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
  **/
  getInstancesIdFramesFrameImageInt16(
    req: operations.GetInstancesIdFramesFrameImageInt16Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesFrameImageInt16Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesFrameImageInt16Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames/{frame}/image-int16", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesFrameImageInt16Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdFramesFrameImageUint16 - Decode a frame (uint16)
   *
   * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
  **/
  getInstancesIdFramesFrameImageUint16(
    req: operations.GetInstancesIdFramesFrameImageUint16Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesFrameImageUint16Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesFrameImageUint16Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames/{frame}/image-uint16", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesFrameImageUint16Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdFramesFrameImageUint8 - Decode a frame (uint8)
   *
   * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
  **/
  getInstancesIdFramesFrameImageUint8(
    req: operations.GetInstancesIdFramesFrameImageUint8Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesFrameImageUint8Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesFrameImageUint8Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames/{frame}/image-uint8", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesFrameImageUint8Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdFramesFrameMatlab - Decode frame for Matlab
   *
   * Decode one frame of interest from the given DICOM instance, and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
  **/
  getInstancesIdFramesFrameMatlab(
    req: operations.GetInstancesIdFramesFrameMatlabRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesFrameMatlabResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesFrameMatlabRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames/{frame}/matlab", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesFrameMatlabResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getInstancesIdFramesFramePreview - Decode a frame (preview)
   *
   * Decode one frame of interest from the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
  **/
  getInstancesIdFramesFramePreview(
    req: operations.GetInstancesIdFramesFramePreviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesFramePreviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesFramePreviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames/{frame}/preview", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesFramePreviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdFramesFrameRaw - Access raw frame
   *
   * Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes.
  **/
  getInstancesIdFramesFrameRaw(
    req: operations.GetInstancesIdFramesFrameRawRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesFrameRawResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesFrameRawRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames/{frame}/raw", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesFrameRawResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getInstancesIdFramesFrameRawGz - Access raw frame (compressed)
   *
   * Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes. The image is compressed using gzip
  **/
  getInstancesIdFramesFrameRawGz(
    req: operations.GetInstancesIdFramesFrameRawGzRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesFrameRawGzResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesFrameRawGzRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames/{frame}/raw.gz", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesFrameRawGzResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/gzip`)) {
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
   * getInstancesIdFramesFrameRendered - Render a frame
   *
   * Render one frame of interest from the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
  **/
  getInstancesIdFramesFrameRendered(
    req: operations.GetInstancesIdFramesFrameRenderedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdFramesFrameRenderedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdFramesFrameRenderedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/frames/{frame}/rendered", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdFramesFrameRenderedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdHeader - Get DICOM meta-header
   *
   * Get the DICOM tags in the meta-header of the DICOM instance. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
  **/
  getInstancesIdHeader(
    req: operations.GetInstancesIdHeaderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdHeaderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdHeaderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/header", req.pathParams);
    
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
        const res: operations.GetInstancesIdHeaderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdHeader200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdImageInt16 - Decode an image (int16)
   *
   * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
  **/
  getInstancesIdImageInt16(
    req: operations.GetInstancesIdImageInt16Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdImageInt16Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdImageInt16Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/image-int16", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdImageInt16Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdImageUint16 - Decode an image (uint16)
   *
   * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
  **/
  getInstancesIdImageUint16(
    req: operations.GetInstancesIdImageUint16Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdImageUint16Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdImageUint16Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/image-uint16", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdImageUint16Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdImageUint8 - Decode an image (uint8)
   *
   * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
  **/
  getInstancesIdImageUint8(
    req: operations.GetInstancesIdImageUint8Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdImageUint8Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdImageUint8Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/image-uint8", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdImageUint8Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdMatlab - Decode frame for Matlab
   *
   * Decode the first frame of the given DICOM instance., and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
  **/
  getInstancesIdMatlab(
    req: operations.GetInstancesIdMatlabRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdMatlabResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdMatlabRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/matlab", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdMatlabResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getInstancesIdMetadata - List metadata
   *
   * Get the list of metadata that are associated with the given instance
  **/
  getInstancesIdMetadata(
    req: operations.GetInstancesIdMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/metadata", req.pathParams);
    
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
        const res: operations.GetInstancesIdMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdMetadata200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdMetadataName - Get metadata
   *
   * Get the value of a metadata that is associated with the given instance
  **/
  getInstancesIdMetadataName(
    req: operations.GetInstancesIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/metadata/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getInstancesIdModule - Get instance module
   *
   * Get the instance module of the DICOM instance whose Orthanc identifier is provided in the URL
  **/
  getInstancesIdModule(
    req: operations.GetInstancesIdModuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdModuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdModuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/module", req.pathParams);
    
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
        const res: operations.GetInstancesIdModuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdModule200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdPatient - Get parent patient
   *
   * Get detailed information about the parent patient of the DICOM instance whose Orthanc identifier is provided in the URL
  **/
  getInstancesIdPatient(
    req: operations.GetInstancesIdPatientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdPatientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdPatientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/patient", req.pathParams);
    
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
        const res: operations.GetInstancesIdPatientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdPatient200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdPdf - Get embedded PDF
   *
   * Get the PDF file that is embedded in one DICOM instance. If the DICOM instance doesn't contain the `EncapsulatedDocument` tag or if the `MIMETypeOfEncapsulatedDocument` tag doesn't correspond to the PDF type, a `404` HTTP error is raised.
  **/
  getInstancesIdPdf(
    req: operations.GetInstancesIdPdfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdPdfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdPdfRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/pdf", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdPdfResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
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
   * getInstancesIdPreview - Decode an image (preview)
   *
   * Decode the first frame of the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
  **/
  getInstancesIdPreview(
    req: operations.GetInstancesIdPreviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdPreviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdPreviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/preview", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdPreviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdRendered - Render an image
   *
   * Render the first frame of the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
  **/
  getInstancesIdRendered(
    req: operations.GetInstancesIdRenderedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdRenderedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdRenderedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/rendered", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdRenderedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `image/x-portable-arbitrarymap`)) {
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
   * getInstancesIdSeries - Get parent series
   *
   * Get detailed information about the parent series of the DICOM instance whose Orthanc identifier is provided in the URL
  **/
  getInstancesIdSeries(
    req: operations.GetInstancesIdSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/series", req.pathParams);
    
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
        const res: operations.GetInstancesIdSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdSeries200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdSimplifiedTags - Get human-readable tags
   *
   * Get the DICOM tags in human-readable format (same as the `/instances/{id}/tags?simplify` route)
  **/
  getInstancesIdSimplifiedTags(
    req: operations.GetInstancesIdSimplifiedTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdSimplifiedTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdSimplifiedTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/simplified-tags", req.pathParams);
    
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
        const res: operations.GetInstancesIdSimplifiedTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdSimplifiedTags200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdStatistics - Get instance statistics
   *
   * Get statistics about the given instance
  **/
  getInstancesIdStatistics(
    req: operations.GetInstancesIdStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/statistics", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesIdStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdStatistics200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdStudy - Get parent study
   *
   * Get detailed information about the parent study of the DICOM instance whose Orthanc identifier is provided in the URL
  **/
  getInstancesIdStudy(
    req: operations.GetInstancesIdStudyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdStudyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdStudyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/study", req.pathParams);
    
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
        const res: operations.GetInstancesIdStudyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdStudy200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstancesIdTags - Get DICOM tags
   *
   * Get the DICOM tags in the specified format. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
  **/
  getInstancesIdTags(
    req: operations.GetInstancesIdTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesIdTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesIdTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/tags", req.pathParams);
    
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
        const res: operations.GetInstancesIdTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstancesIdTags200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getJobs - List jobs
   *
   * List all the available jobs
  **/
  getJobs(
    req: operations.GetJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetJobsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/jobs";
    
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
        const res: operations.GetJobsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getJobs200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getJobsId - Get job
   *
   * Retrieve detailed information about the job whose identifier is provided in the URL: https://book.orthanc-server.com/users/advanced-rest.html#jobs
  **/
  getJobsId(
    req: operations.GetJobsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetJobsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetJobsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/jobs/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetJobsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getJobsId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getJobsIdKey - Get job output
   *
   * Retrieve some output produced by a job. As of Orthanc 1.8.2, only the jobs that generate a DICOMDIR media or a ZIP archive provide such an output (with `key` equals to `archive`).
  **/
  getJobsIdKey(
    req: operations.GetJobsIdKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetJobsIdKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetJobsIdKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/jobs/{id}/{key}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetJobsIdKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getModalities - List DICOM modalities
   *
   * List all the DICOM modalities that are known to Orthanc. This corresponds either to the content of the `DicomModalities` configuration option, or to the information stored in the database if `DicomModalitiesInDatabase` is `true`.
  **/
  getModalities(
    req: operations.GetModalitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModalitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModalitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/modalities";
    
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
        const res: operations.GetModalitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getModalities200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getModalitiesId - List operations on modality
   *
   * List the operations that are available for a DICOM modality.
  **/
  getModalitiesId(
    req: operations.GetModalitiesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModalitiesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModalitiesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetModalitiesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getModalitiesId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getModalitiesIdConfiguration - Get modality configuration
   *
   * Get detailed information about the configuration of some DICOM modality
  **/
  getModalitiesIdConfiguration(
    req: operations.GetModalitiesIdConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModalitiesIdConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModalitiesIdConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/configuration", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetModalitiesIdConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getModalitiesIdConfiguration200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatients - List the available patients
   *
   * List the Orthanc identifiers of all the available DICOM patients
  **/
  getPatients(
    req: operations.GetPatientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/patients";
    
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
        const res: operations.GetPatientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatients200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsId - Get information about some patient
   *
   * Get detailed information about the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  getPatientsId(
    req: operations.GetPatientsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}", req.pathParams);
    
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
        const res: operations.GetPatientsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdArchive - Create ZIP archive
   *
   * Synchronously create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
  **/
  getPatientsIdArchive(
    req: operations.GetPatientsIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/archive", req.pathParams);
    
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
        const res: operations.GetPatientsIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * getPatientsIdAttachments - List attachments
   *
   * Get the list of attachments that are associated with the given patient
  **/
  getPatientsIdAttachments(
    req: operations.GetPatientsIdAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdAttachmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdAttachments200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdAttachmentsName - List operations on attachments
   *
   * Get the list of the operations that are available for attachments associated with the given patient
  **/
  getPatientsIdAttachmentsName(
    req: operations.GetPatientsIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdAttachmentsName200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdAttachmentsNameCompressedData - Get attachment (no decompression)
   *
   * Get the (binary) content of one attachment associated with the given patient. The attachment will not be decompressed if `StorageCompression` is `true`.
  **/
  getPatientsIdAttachmentsNameCompressedData(
    req: operations.GetPatientsIdAttachmentsNameCompressedDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdAttachmentsNameCompressedDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdAttachmentsNameCompressedDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/compressed-data", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdAttachmentsNameCompressedDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getPatientsIdAttachmentsNameCompressedMd5 - Get MD5 of attachment on disk
   *
   * Get the MD5 hash of one attachment associated with the given patient, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
  **/
  getPatientsIdAttachmentsNameCompressedMd5(
    req: operations.GetPatientsIdAttachmentsNameCompressedMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdAttachmentsNameCompressedMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdAttachmentsNameCompressedMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/compressed-md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdAttachmentsNameCompressedMd5Response = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getPatientsIdAttachmentsNameCompressedSize - Get size of attachment on disk
   *
   * Get the size of one attachment associated with the given patient, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
  **/
  getPatientsIdAttachmentsNameCompressedSize(
    req: operations.GetPatientsIdAttachmentsNameCompressedSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdAttachmentsNameCompressedSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdAttachmentsNameCompressedSizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/compressed-size", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdAttachmentsNameCompressedSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getPatientsIdAttachmentsNameData - Get attachment
   *
   * Get the (binary) content of one attachment associated with the given patient
  **/
  getPatientsIdAttachmentsNameData(
    req: operations.GetPatientsIdAttachmentsNameDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdAttachmentsNameDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdAttachmentsNameDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/data", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdAttachmentsNameDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getPatientsIdAttachmentsNameIsCompressed - Is attachment compressed?
   *
   * Test whether the attachment has been stored as a compressed file on the disk.
  **/
  getPatientsIdAttachmentsNameIsCompressed(
    req: operations.GetPatientsIdAttachmentsNameIsCompressedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdAttachmentsNameIsCompressedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdAttachmentsNameIsCompressedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/is-compressed", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdAttachmentsNameIsCompressedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getPatientsIdAttachmentsNameMd5 - Get MD5 of attachment
   *
   * Get the MD5 hash of one attachment associated with the given patient
  **/
  getPatientsIdAttachmentsNameMd5(
    req: operations.GetPatientsIdAttachmentsNameMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdAttachmentsNameMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdAttachmentsNameMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdAttachmentsNameMd5Response = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getPatientsIdAttachmentsNameSize - Get size of attachment
   *
   * Get the size of one attachment associated with the given patient
  **/
  getPatientsIdAttachmentsNameSize(
    req: operations.GetPatientsIdAttachmentsNameSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdAttachmentsNameSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdAttachmentsNameSizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/size", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdAttachmentsNameSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getPatientsIdInstances - Get child instances
   *
   * Get detailed information about the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  getPatientsIdInstances(
    req: operations.GetPatientsIdInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/instances", req.pathParams);
    
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
        const res: operations.GetPatientsIdInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdInstances200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdInstancesTags - Get tags of instances
   *
   * Get the tags of all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  getPatientsIdInstancesTags(
    req: operations.GetPatientsIdInstancesTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdInstancesTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdInstancesTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/instances-tags", req.pathParams);
    
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
        const res: operations.GetPatientsIdInstancesTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdInstancesTags200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdMedia - Create DICOMDIR media
   *
   * Synchronously create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
  **/
  getPatientsIdMedia(
    req: operations.GetPatientsIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/media", req.pathParams);
    
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
        const res: operations.GetPatientsIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * getPatientsIdMetadata - List metadata
   *
   * Get the list of metadata that are associated with the given patient
  **/
  getPatientsIdMetadata(
    req: operations.GetPatientsIdMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/metadata", req.pathParams);
    
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
        const res: operations.GetPatientsIdMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdMetadata200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdMetadataName - Get metadata
   *
   * Get the value of a metadata that is associated with the given patient
  **/
  getPatientsIdMetadataName(
    req: operations.GetPatientsIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/metadata/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getPatientsIdModule - Get patient module
   *
   * Get the patient module of the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  getPatientsIdModule(
    req: operations.GetPatientsIdModuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdModuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdModuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/module", req.pathParams);
    
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
        const res: operations.GetPatientsIdModuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdModule200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdProtected - Is the patient protected against recycling?
   *
   * Is the patient protected against recycling?
  **/
  getPatientsIdProtected(
    req: operations.GetPatientsIdProtectedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdProtectedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdProtectedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/protected", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdProtectedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getPatientsIdSeries - Get child series
   *
   * Get detailed information about the child series of the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  getPatientsIdSeries(
    req: operations.GetPatientsIdSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/series", req.pathParams);
    
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
        const res: operations.GetPatientsIdSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdSeries200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdSharedTags - Get shared tags
   *
   * Extract the DICOM tags whose value is constant across all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  getPatientsIdSharedTags(
    req: operations.GetPatientsIdSharedTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdSharedTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdSharedTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/shared-tags", req.pathParams);
    
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
        const res: operations.GetPatientsIdSharedTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdSharedTags200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdStatistics - Get patient statistics
   *
   * Get statistics about the given patient
  **/
  getPatientsIdStatistics(
    req: operations.GetPatientsIdStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/statistics", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientsIdStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdStatistics200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientsIdStudies - Get child studies
   *
   * Get detailed information about the child studies of the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  getPatientsIdStudies(
    req: operations.GetPatientsIdStudiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientsIdStudiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientsIdStudiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/studies", req.pathParams);
    
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
        const res: operations.GetPatientsIdStudiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPatientsIdStudies200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPeers - List Orthanc peers
   *
   * List all the Orthanc peers that are known to Orthanc. This corresponds either to the content of the `OrthancPeers` configuration option, or to the information stored in the database if `OrthancPeersInDatabase` is `true`.
  **/
  getPeers(
    req: operations.GetPeersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPeersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPeersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/peers";
    
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
        const res: operations.GetPeersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPeers200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPeersId - List operations on peer
   *
   * List the operations that are available for an Orthanc peer.
  **/
  getPeersId(
    req: operations.GetPeersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPeersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPeersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/peers/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPeersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPeersId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPeersIdConfiguration - Get peer configuration
   *
   * Get detailed information about the configuration of some Orthanc peer
  **/
  getPeersIdConfiguration(
    req: operations.GetPeersIdConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPeersIdConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPeersIdConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/peers/{id}/configuration", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPeersIdConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPeersIdConfiguration200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPeersIdSystem - Get peer system information
   *
   * Get system information about some Orthanc peer. This corresponds to doing a `GET` request against the `/system` URI of the remote peer. This route can be used to test connectivity.
  **/
  getPeersIdSystem(
    req: operations.GetPeersIdSystemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPeersIdSystemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPeersIdSystemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/peers/{id}/system", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPeersIdSystemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPeersIdSystem200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlugins - List plugins
   *
   * List all the installed plugins
  **/
  getPlugins(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/plugins";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPluginsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPlugins200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPluginsExplorerJs - JavaScript extensions to Orthanc Explorer
   *
   * Get the JavaScript extensions that are installed by all the plugins using the `OrthancPluginExtendOrthancExplorer()` function of the plugin SDK. This route is for internal use of Orthanc Explorer.
  **/
  getPluginsExplorerJs(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginsExplorerJsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/plugins/explorer.js";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPluginsExplorerJsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/javascript`)) {
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
   * getPluginsId - Get plugin
   *
   * Get system information about the plugin whose identifier is provided in the URL
  **/
  getPluginsId(
    req: operations.GetPluginsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPluginsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/plugins/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPluginsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPluginsId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getQueries - List query/retrieve operations
   *
   * List the identifiers of all the query/retrieve operations on DICOM modalities, as initiated by calls to `/modalities/{id}/query`. The length of this list is bounded by the `QueryRetrieveSize` configuration option of Orthanc. https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
  **/
  getQueries(
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueriesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/queries";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetQueriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getQueries200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getQueriesId - List operations on a query
   *
   * List the available operations for the query/retrieve operation whose identifier is provided in the URL
  **/
  getQueriesId(
    req: operations.GetQueriesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueriesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueriesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetQueriesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getQueriesId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getQueriesIdAnswers - List answers to a query
   *
   * List the indices of all the available answers resulting from a query/retrieve operation on some DICOM modality, whose identifier is provided in the URL
  **/
  getQueriesIdAnswers(
    req: operations.GetQueriesIdAnswersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueriesIdAnswersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueriesIdAnswersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/answers", req.pathParams);
    
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
        const res: operations.GetQueriesIdAnswersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getQueriesIdAnswers200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getQueriesIdAnswersIndex - List operations on an answer
   *
   * List the available operations on an answer associated with the query/retrieve operation whose identifier is provided in the URL
  **/
  getQueriesIdAnswersIndex(
    req: operations.GetQueriesIdAnswersIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueriesIdAnswersIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueriesIdAnswersIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/answers/{index}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetQueriesIdAnswersIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getQueriesIdAnswersIndex200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getQueriesIdAnswersIndexContent - Get one answer
   *
   * Get the content (DICOM tags) of one answer associated with the query/retrieve operation whose identifier is provided in the URL
  **/
  getQueriesIdAnswersIndexContent(
    req: operations.GetQueriesIdAnswersIndexContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueriesIdAnswersIndexContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueriesIdAnswersIndexContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/answers/{index}/content", req.pathParams);
    
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
        const res: operations.GetQueriesIdAnswersIndexContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getQueriesIdAnswersIndexContent200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getQueriesIdLevel - Get level of original query
   *
   * Get the query level (value of the `QueryRetrieveLevel` tag) of the query/retrieve operation whose identifier is provided in the URL
  **/
  getQueriesIdLevel(
    req: operations.GetQueriesIdLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueriesIdLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueriesIdLevelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/level", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetQueriesIdLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getQueriesIdModality - Get modality of original query
   *
   * Get the identifier of the DICOM modality that was targeted by the query/retrieve operation whose identifier is provided in the URL
  **/
  getQueriesIdModality(
    req: operations.GetQueriesIdModalityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueriesIdModalityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueriesIdModalityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/modality", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetQueriesIdModalityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getQueriesIdQuery - Get original query arguments
   *
   * Get the original DICOM filter associated with the query/retrieve operation whose identifier is provided in the URL
  **/
  getQueriesIdQuery(
    req: operations.GetQueriesIdQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueriesIdQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueriesIdQueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/query", req.pathParams);
    
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
        const res: operations.GetQueriesIdQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getQueriesIdQuery200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeries - List the available series
   *
   * List the Orthanc identifiers of all the available DICOM series
  **/
  getSeries(
    req: operations.GetSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/series";
    
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
        const res: operations.GetSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeries200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesId - Get information about some series
   *
   * Get detailed information about the DICOM series whose Orthanc identifier is provided in the URL
  **/
  getSeriesId(
    req: operations.GetSeriesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}", req.pathParams);
    
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
        const res: operations.GetSeriesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdArchive - Create ZIP archive
   *
   * Synchronously create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
  **/
  getSeriesIdArchive(
    req: operations.GetSeriesIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/archive", req.pathParams);
    
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
        const res: operations.GetSeriesIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * getSeriesIdAttachments - List attachments
   *
   * Get the list of attachments that are associated with the given series
  **/
  getSeriesIdAttachments(
    req: operations.GetSeriesIdAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdAttachmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdAttachments200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdAttachmentsName - List operations on attachments
   *
   * Get the list of the operations that are available for attachments associated with the given series
  **/
  getSeriesIdAttachmentsName(
    req: operations.GetSeriesIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdAttachmentsName200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdAttachmentsNameCompressedData - Get attachment (no decompression)
   *
   * Get the (binary) content of one attachment associated with the given series. The attachment will not be decompressed if `StorageCompression` is `true`.
  **/
  getSeriesIdAttachmentsNameCompressedData(
    req: operations.GetSeriesIdAttachmentsNameCompressedDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdAttachmentsNameCompressedDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdAttachmentsNameCompressedDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/compressed-data", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdAttachmentsNameCompressedDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getSeriesIdAttachmentsNameCompressedMd5 - Get MD5 of attachment on disk
   *
   * Get the MD5 hash of one attachment associated with the given series, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
  **/
  getSeriesIdAttachmentsNameCompressedMd5(
    req: operations.GetSeriesIdAttachmentsNameCompressedMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdAttachmentsNameCompressedMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdAttachmentsNameCompressedMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/compressed-md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdAttachmentsNameCompressedMd5Response = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getSeriesIdAttachmentsNameCompressedSize - Get size of attachment on disk
   *
   * Get the size of one attachment associated with the given series, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
  **/
  getSeriesIdAttachmentsNameCompressedSize(
    req: operations.GetSeriesIdAttachmentsNameCompressedSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdAttachmentsNameCompressedSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdAttachmentsNameCompressedSizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/compressed-size", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdAttachmentsNameCompressedSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getSeriesIdAttachmentsNameData - Get attachment
   *
   * Get the (binary) content of one attachment associated with the given series
  **/
  getSeriesIdAttachmentsNameData(
    req: operations.GetSeriesIdAttachmentsNameDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdAttachmentsNameDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdAttachmentsNameDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/data", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdAttachmentsNameDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getSeriesIdAttachmentsNameIsCompressed - Is attachment compressed?
   *
   * Test whether the attachment has been stored as a compressed file on the disk.
  **/
  getSeriesIdAttachmentsNameIsCompressed(
    req: operations.GetSeriesIdAttachmentsNameIsCompressedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdAttachmentsNameIsCompressedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdAttachmentsNameIsCompressedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/is-compressed", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdAttachmentsNameIsCompressedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getSeriesIdAttachmentsNameMd5 - Get MD5 of attachment
   *
   * Get the MD5 hash of one attachment associated with the given series
  **/
  getSeriesIdAttachmentsNameMd5(
    req: operations.GetSeriesIdAttachmentsNameMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdAttachmentsNameMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdAttachmentsNameMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdAttachmentsNameMd5Response = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getSeriesIdAttachmentsNameSize - Get size of attachment
   *
   * Get the size of one attachment associated with the given series
  **/
  getSeriesIdAttachmentsNameSize(
    req: operations.GetSeriesIdAttachmentsNameSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdAttachmentsNameSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdAttachmentsNameSizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/size", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdAttachmentsNameSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getSeriesIdInstances - Get child instances
   *
   * Get detailed information about the child instances of the DICOM series whose Orthanc identifier is provided in the URL
  **/
  getSeriesIdInstances(
    req: operations.GetSeriesIdInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/instances", req.pathParams);
    
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
        const res: operations.GetSeriesIdInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdInstances200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdInstancesTags - Get tags of instances
   *
   * Get the tags of all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
  **/
  getSeriesIdInstancesTags(
    req: operations.GetSeriesIdInstancesTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdInstancesTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdInstancesTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/instances-tags", req.pathParams);
    
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
        const res: operations.GetSeriesIdInstancesTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdInstancesTags200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdMedia - Create DICOMDIR media
   *
   * Synchronously create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
  **/
  getSeriesIdMedia(
    req: operations.GetSeriesIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/media", req.pathParams);
    
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
        const res: operations.GetSeriesIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * getSeriesIdMetadata - List metadata
   *
   * Get the list of metadata that are associated with the given series
  **/
  getSeriesIdMetadata(
    req: operations.GetSeriesIdMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/metadata", req.pathParams);
    
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
        const res: operations.GetSeriesIdMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdMetadata200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdMetadataName - Get metadata
   *
   * Get the value of a metadata that is associated with the given series
  **/
  getSeriesIdMetadataName(
    req: operations.GetSeriesIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/metadata/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getSeriesIdModule - Get series module
   *
   * Get the series module of the DICOM series whose Orthanc identifier is provided in the URL
  **/
  getSeriesIdModule(
    req: operations.GetSeriesIdModuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdModuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdModuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/module", req.pathParams);
    
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
        const res: operations.GetSeriesIdModuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdModule200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdOrderedSlices - Order the slices
   *
   * Sort the instances and frames (slices) of the DICOM series whose Orthanc identifier is provided in the URL. This URI is essentially used by the Orthanc Web viewer and by the Osimis Web viewer.
  **/
  getSeriesIdOrderedSlices(
    req: operations.GetSeriesIdOrderedSlicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdOrderedSlicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdOrderedSlicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/ordered-slices", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdOrderedSlicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdOrderedSlices200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdPatient - Get parent patient
   *
   * Get detailed information about the parent patient of the DICOM series whose Orthanc identifier is provided in the URL
  **/
  getSeriesIdPatient(
    req: operations.GetSeriesIdPatientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdPatientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdPatientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/patient", req.pathParams);
    
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
        const res: operations.GetSeriesIdPatientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdPatient200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdSharedTags - Get shared tags
   *
   * Extract the DICOM tags whose value is constant across all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
  **/
  getSeriesIdSharedTags(
    req: operations.GetSeriesIdSharedTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdSharedTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdSharedTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/shared-tags", req.pathParams);
    
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
        const res: operations.GetSeriesIdSharedTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdSharedTags200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdStatistics - Get series statistics
   *
   * Get statistics about the given series
  **/
  getSeriesIdStatistics(
    req: operations.GetSeriesIdStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/statistics", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesIdStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdStatistics200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesIdStudy - Get parent study
   *
   * Get detailed information about the parent study of the DICOM series whose Orthanc identifier is provided in the URL
  **/
  getSeriesIdStudy(
    req: operations.GetSeriesIdStudyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesIdStudyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesIdStudyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/study", req.pathParams);
    
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
        const res: operations.GetSeriesIdStudyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSeriesIdStudy200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStatistics - Get database statistics
   *
   * Get statistics related to the database of Orthanc
  **/
  getStatistics(
    config?: AxiosRequestConfig
  ): Promise<operations.GetStatisticsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statistics";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStatistics200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStorageCommitmentId - Get storage commitment report
   *
   * Get the storage commitment report whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
  **/
  getStorageCommitmentId(
    req: operations.GetStorageCommitmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStorageCommitmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStorageCommitmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/storage-commitment/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStorageCommitmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStorageCommitmentId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudies - List the available studies
   *
   * List the Orthanc identifiers of all the available DICOM studies
  **/
  getStudies(
    req: operations.GetStudiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/studies";
    
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
        const res: operations.GetStudiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudies200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesId - Get information about some study
   *
   * Get detailed information about the DICOM study whose Orthanc identifier is provided in the URL
  **/
  getStudiesId(
    req: operations.GetStudiesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}", req.pathParams);
    
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
        const res: operations.GetStudiesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesId200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdArchive - Create ZIP archive
   *
   * Synchronously create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
  **/
  getStudiesIdArchive(
    req: operations.GetStudiesIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/archive", req.pathParams);
    
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
        const res: operations.GetStudiesIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * getStudiesIdAttachments - List attachments
   *
   * Get the list of attachments that are associated with the given study
  **/
  getStudiesIdAttachments(
    req: operations.GetStudiesIdAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdAttachmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdAttachments200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdAttachmentsName - List operations on attachments
   *
   * Get the list of the operations that are available for attachments associated with the given study
  **/
  getStudiesIdAttachmentsName(
    req: operations.GetStudiesIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdAttachmentsName200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdAttachmentsNameCompressedData - Get attachment (no decompression)
   *
   * Get the (binary) content of one attachment associated with the given study. The attachment will not be decompressed if `StorageCompression` is `true`.
  **/
  getStudiesIdAttachmentsNameCompressedData(
    req: operations.GetStudiesIdAttachmentsNameCompressedDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdAttachmentsNameCompressedDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdAttachmentsNameCompressedDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/compressed-data", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdAttachmentsNameCompressedDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getStudiesIdAttachmentsNameCompressedMd5 - Get MD5 of attachment on disk
   *
   * Get the MD5 hash of one attachment associated with the given study, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
  **/
  getStudiesIdAttachmentsNameCompressedMd5(
    req: operations.GetStudiesIdAttachmentsNameCompressedMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdAttachmentsNameCompressedMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdAttachmentsNameCompressedMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/compressed-md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdAttachmentsNameCompressedMd5Response = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getStudiesIdAttachmentsNameCompressedSize - Get size of attachment on disk
   *
   * Get the size of one attachment associated with the given study, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
  **/
  getStudiesIdAttachmentsNameCompressedSize(
    req: operations.GetStudiesIdAttachmentsNameCompressedSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdAttachmentsNameCompressedSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdAttachmentsNameCompressedSizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/compressed-size", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdAttachmentsNameCompressedSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getStudiesIdAttachmentsNameData - Get attachment
   *
   * Get the (binary) content of one attachment associated with the given study
  **/
  getStudiesIdAttachmentsNameData(
    req: operations.GetStudiesIdAttachmentsNameDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdAttachmentsNameDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdAttachmentsNameDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/data", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdAttachmentsNameDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getStudiesIdAttachmentsNameIsCompressed - Is attachment compressed?
   *
   * Test whether the attachment has been stored as a compressed file on the disk.
  **/
  getStudiesIdAttachmentsNameIsCompressed(
    req: operations.GetStudiesIdAttachmentsNameIsCompressedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdAttachmentsNameIsCompressedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdAttachmentsNameIsCompressedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/is-compressed", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdAttachmentsNameIsCompressedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getStudiesIdAttachmentsNameMd5 - Get MD5 of attachment
   *
   * Get the MD5 hash of one attachment associated with the given study
  **/
  getStudiesIdAttachmentsNameMd5(
    req: operations.GetStudiesIdAttachmentsNameMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdAttachmentsNameMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdAttachmentsNameMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdAttachmentsNameMd5Response = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getStudiesIdAttachmentsNameSize - Get size of attachment
   *
   * Get the size of one attachment associated with the given study
  **/
  getStudiesIdAttachmentsNameSize(
    req: operations.GetStudiesIdAttachmentsNameSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdAttachmentsNameSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdAttachmentsNameSizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/size", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdAttachmentsNameSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getStudiesIdInstances - Get child instances
   *
   * Get detailed information about the child instances of the DICOM study whose Orthanc identifier is provided in the URL
  **/
  getStudiesIdInstances(
    req: operations.GetStudiesIdInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/instances", req.pathParams);
    
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
        const res: operations.GetStudiesIdInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdInstances200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdInstancesTags - Get tags of instances
   *
   * Get the tags of all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
  **/
  getStudiesIdInstancesTags(
    req: operations.GetStudiesIdInstancesTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdInstancesTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdInstancesTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/instances-tags", req.pathParams);
    
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
        const res: operations.GetStudiesIdInstancesTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdInstancesTags200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdMedia - Create DICOMDIR media
   *
   * Synchronously create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
  **/
  getStudiesIdMedia(
    req: operations.GetStudiesIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/media", req.pathParams);
    
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
        const res: operations.GetStudiesIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * getStudiesIdMetadata - List metadata
   *
   * Get the list of metadata that are associated with the given study
  **/
  getStudiesIdMetadata(
    req: operations.GetStudiesIdMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/metadata", req.pathParams);
    
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
        const res: operations.GetStudiesIdMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdMetadata200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdMetadataName - Get metadata
   *
   * Get the value of a metadata that is associated with the given study
  **/
  getStudiesIdMetadataName(
    req: operations.GetStudiesIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/metadata/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getStudiesIdModule - Get study module
   *
   * Get the study module of the DICOM study whose Orthanc identifier is provided in the URL
  **/
  getStudiesIdModule(
    req: operations.GetStudiesIdModuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdModuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdModuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/module", req.pathParams);
    
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
        const res: operations.GetStudiesIdModuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdModule200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdModulePatient - Get patient module of study
   *
   * Get the patient module of the DICOM study whose Orthanc identifier is provided in the URL
  **/
  getStudiesIdModulePatient(
    req: operations.GetStudiesIdModulePatientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdModulePatientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdModulePatientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/module-patient", req.pathParams);
    
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
        const res: operations.GetStudiesIdModulePatientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdModulePatient200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdPatient - Get parent patient
   *
   * Get detailed information about the parent patient of the DICOM study whose Orthanc identifier is provided in the URL
  **/
  getStudiesIdPatient(
    req: operations.GetStudiesIdPatientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdPatientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdPatientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/patient", req.pathParams);
    
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
        const res: operations.GetStudiesIdPatientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdPatient200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdSeries - Get child series
   *
   * Get detailed information about the child series of the DICOM study whose Orthanc identifier is provided in the URL
  **/
  getStudiesIdSeries(
    req: operations.GetStudiesIdSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/series", req.pathParams);
    
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
        const res: operations.GetStudiesIdSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdSeries200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdSharedTags - Get shared tags
   *
   * Extract the DICOM tags whose value is constant across all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
  **/
  getStudiesIdSharedTags(
    req: operations.GetStudiesIdSharedTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdSharedTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdSharedTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/shared-tags", req.pathParams);
    
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
        const res: operations.GetStudiesIdSharedTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdSharedTags200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudiesIdStatistics - Get study statistics
   *
   * Get statistics about the given study
  **/
  getStudiesIdStatistics(
    req: operations.GetStudiesIdStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiesIdStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiesIdStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/statistics", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStudiesIdStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStudiesIdStatistics200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSystem - Get system information
   *
   * Get system information about Orthanc
  **/
  getSystem(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSystemResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/system";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSystemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSystem200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTools - List operations
   *
   * List the available operations under URI `/tools/`
  **/
  getTools(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTools200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getToolsAcceptedTransferSyntaxes - Get accepted transfer syntaxes
   *
   * Get the list of UIDs of the DICOM transfer syntaxes that are accepted by Orthanc C-STORE SCP. This corresponds to the configuration options `AcceptedTransferSyntaxes` and `XXXTransferSyntaxAccepted`.
  **/
  getToolsAcceptedTransferSyntaxes(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsAcceptedTransferSyntaxesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/accepted-transfer-syntaxes";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsAcceptedTransferSyntaxesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getToolsAcceptedTransferSyntaxes200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getToolsDefaultEncoding - Get default encoding
   *
   * Get the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.
  **/
  getToolsDefaultEncoding(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsDefaultEncodingResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/default-encoding";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsDefaultEncodingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsDicomConformance - Get DICOM conformance
   *
   * Get the DICOM conformance statement of Orthanc
  **/
  getToolsDicomConformance(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsDicomConformanceResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/dicom-conformance";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsDicomConformanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsGenerateUid - Generate an identifier
   *
   * Generate a random DICOM identifier
  **/
  getToolsGenerateUid(
    req: operations.GetToolsGenerateUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsGenerateUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetToolsGenerateUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/generate-uid";
    
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
        const res: operations.GetToolsGenerateUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsLogLevel - Get main log level
   *
   * Get the main log level of Orthanc
  **/
  getToolsLogLevel(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsLogLevelResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsLogLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsLogLevelDicom - Get log level for `dicom`
   *
   * Get the log level of the log category `dicom`
  **/
  getToolsLogLevelDicom(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsLogLevelDicomResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-dicom";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsLogLevelDicomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsLogLevelGeneric - Get log level for `generic`
   *
   * Get the log level of the log category `generic`
  **/
  getToolsLogLevelGeneric(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsLogLevelGenericResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-generic";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsLogLevelGenericResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsLogLevelHttp - Get log level for `http`
   *
   * Get the log level of the log category `http`
  **/
  getToolsLogLevelHttp(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsLogLevelHttpResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-http";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsLogLevelHttpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsLogLevelJobs - Get log level for `jobs`
   *
   * Get the log level of the log category `jobs`
  **/
  getToolsLogLevelJobs(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsLogLevelJobsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-jobs";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsLogLevelJobsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsLogLevelLua - Get log level for `lua`
   *
   * Get the log level of the log category `lua`
  **/
  getToolsLogLevelLua(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsLogLevelLuaResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-lua";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsLogLevelLuaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsLogLevelPlugins - Get log level for `plugins`
   *
   * Get the log level of the log category `plugins`
  **/
  getToolsLogLevelPlugins(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsLogLevelPluginsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-plugins";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsLogLevelPluginsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsLogLevelSqlite - Get log level for `sqlite`
   *
   * Get the log level of the log category `sqlite`
  **/
  getToolsLogLevelSqlite(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsLogLevelSqliteResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-sqlite";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsLogLevelSqliteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsMetrics - Are metrics collected?
   *
   * Returns a Boolean specifying whether Prometheus metrics are collected and exposed at `/tools/metrics-prometheus`
  **/
  getToolsMetrics(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsMetricsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/metrics";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsMetricsPrometheus - Get usage metrics
   *
   * Get usage metrics of Orthanc in the Prometheus file format (OpenMetrics): https://book.orthanc-server.com/users/advanced-rest.html#instrumentation-with-prometheus
  **/
  getToolsMetricsPrometheus(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsMetricsPrometheusResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/metrics-prometheus";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsMetricsPrometheusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getToolsNow - Get UTC time
   *
   * Get UTC time
  **/
  getToolsNow(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsNowResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/now";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsNowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsNowLocal - Get local time
   *
   * Get local time
  **/
  getToolsNowLocal(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsNowLocalResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/now-local";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsNowLocalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * getToolsUnknownSopClassAccepted - Is unknown SOP class accepted?
   *
   * Shall Orthanc C-STORE SCP accept DICOM instances with an unknown SOP class UID?
  **/
  getToolsUnknownSopClassAccepted(
    config?: AxiosRequestConfig
  ): Promise<operations.GetToolsUnknownSopClassAcceptedResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/unknown-sop-class-accepted";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetToolsUnknownSopClassAcceptedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * postInstances - Upload DICOM instances
   *
   * Upload DICOM instances
  **/
  postInstances(
    req: operations.PostInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/instances";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postInstances200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInstancesIdAnonymize - Anonymize instance
   *
   * Download an anonymized version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#anonymization-of-a-single-instance
  **/
  postInstancesIdAnonymize(
    req: operations.PostInstancesIdAnonymizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInstancesIdAnonymizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInstancesIdAnonymizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/anonymize", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInstancesIdAnonymizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/dicom`)) {
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
   * postInstancesIdAttachmentsNameCompress - Compress attachment
   *
   * Change the compression scheme that is used to store an attachment.
  **/
  postInstancesIdAttachmentsNameCompress(
    req: operations.PostInstancesIdAttachmentsNameCompressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInstancesIdAttachmentsNameCompressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInstancesIdAttachmentsNameCompressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/compress", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInstancesIdAttachmentsNameCompressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInstancesIdAttachmentsNameUncompress - Uncompress attachment
   *
   * Change the compression scheme that is used to store an attachment.
  **/
  postInstancesIdAttachmentsNameUncompress(
    req: operations.PostInstancesIdAttachmentsNameUncompressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInstancesIdAttachmentsNameUncompressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInstancesIdAttachmentsNameUncompressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/uncompress", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInstancesIdAttachmentsNameUncompressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInstancesIdAttachmentsNameVerifyMd5 - Verify attachment
   *
   * Verify that the attachment is not corrupted, by validating its MD5 hash
  **/
  postInstancesIdAttachmentsNameVerifyMd5(
    req: operations.PostInstancesIdAttachmentsNameVerifyMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInstancesIdAttachmentsNameVerifyMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInstancesIdAttachmentsNameVerifyMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}/verify-md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInstancesIdAttachmentsNameVerifyMd5Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postInstancesIdAttachmentsNameVerifyMd5200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInstancesIdExport - Write DICOM onto filesystem
   *
   * Write the DICOM file onto the filesystem where Orthanc is running
  **/
  postInstancesIdExport(
    req: operations.PostInstancesIdExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInstancesIdExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInstancesIdExportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/export", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInstancesIdExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postInstancesIdModify - Modify instance
   *
   * Download a modified version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#modification-of-a-single-instance
  **/
  postInstancesIdModify(
    req: operations.PostInstancesIdModifyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInstancesIdModifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInstancesIdModifyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/modify", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInstancesIdModifyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/dicom`)) {
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
   * postInstancesIdReconstruct - Reconstruct tags of instance
   *
   * Reconstruct the main DICOM tags of the instance whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
  **/
  postInstancesIdReconstruct(
    req: operations.PostInstancesIdReconstructRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInstancesIdReconstructResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInstancesIdReconstructRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/reconstruct", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostInstancesIdReconstructResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postJobsIdCancel - Cancel job
   *
   * Cancel the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
  **/
  postJobsIdCancel(
    req: operations.PostJobsIdCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostJobsIdCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostJobsIdCancelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/jobs/{id}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostJobsIdCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postJobsIdCancel200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postJobsIdPause - Pause job
   *
   * Pause the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
  **/
  postJobsIdPause(
    req: operations.PostJobsIdPauseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostJobsIdPauseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostJobsIdPauseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/jobs/{id}/pause", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostJobsIdPauseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postJobsIdPause200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postJobsIdResubmit - Resubmit job
   *
   * Resubmit the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
  **/
  postJobsIdResubmit(
    req: operations.PostJobsIdResubmitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostJobsIdResubmitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostJobsIdResubmitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/jobs/{id}/resubmit", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostJobsIdResubmitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postJobsIdResubmit200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postJobsIdResume - Resume job
   *
   * Resume the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
  **/
  postJobsIdResume(
    req: operations.PostJobsIdResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostJobsIdResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostJobsIdResumeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/jobs/{id}/resume", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostJobsIdResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postJobsIdResume200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdEcho - Trigger C-ECHO SCU
   *
   * Trigger C-ECHO SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-c-echo
  **/
  postModalitiesIdEcho(
    req: operations.PostModalitiesIdEchoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdEchoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdEchoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/echo", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdEchoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdFind - Hierarchical C-FIND SCU
   *
   * Trigger a sequence of C-FIND SCU commands against the DICOM modality whose identifier is provided in URL, in order to discover a hierarchy of matching patients/studies/series. Deprecated in favor of `/modalities/{id}/query`.
  **/
  postModalitiesIdFind(
    req: operations.PostModalitiesIdFindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdFindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdFindRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/find", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdFindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdFind200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdFindInstance - C-FIND SCU for instances
   *
   * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find an instance. Deprecated in favor of `/modalities/{id}/query`.
  **/
  postModalitiesIdFindInstance(
    req: operations.PostModalitiesIdFindInstanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdFindInstanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdFindInstanceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/find-instance", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdFindInstanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdFindInstance200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdFindPatient - C-FIND SCU for patients
   *
   * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a patient. Deprecated in favor of `/modalities/{id}/query`.
  **/
  postModalitiesIdFindPatient(
    req: operations.PostModalitiesIdFindPatientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdFindPatientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdFindPatientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/find-patient", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdFindPatientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdFindPatient200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdFindSeries - C-FIND SCU for series
   *
   * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a series. Deprecated in favor of `/modalities/{id}/query`.
  **/
  postModalitiesIdFindSeries(
    req: operations.PostModalitiesIdFindSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdFindSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdFindSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/find-series", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdFindSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdFindSeries200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdFindStudy - C-FIND SCU for studies
   *
   * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a study. Deprecated in favor of `/modalities/{id}/query`.
  **/
  postModalitiesIdFindStudy(
    req: operations.PostModalitiesIdFindStudyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdFindStudyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdFindStudyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/find-study", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdFindStudyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdFindStudy200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdFindWorklist - C-FIND SCU for worklist
   *
   * Trigger C-FIND SCU command against the remote worklists of the DICOM modality whose identifier is provided in URL
  **/
  postModalitiesIdFindWorklist(
    req: operations.PostModalitiesIdFindWorklistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdFindWorklistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdFindWorklistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/find-worklist", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdFindWorklistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdFindWorklist200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdMove - Trigger C-MOVE SCU
   *
   * Start a C-MOVE SCU command as a job, in order to drive the execution of a sequence of C-STORE commands by some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-c-move
  **/
  postModalitiesIdMove(
    req: operations.PostModalitiesIdMoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdMoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdMoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/move", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdMoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdQuery - Trigger C-FIND SCU
   *
   * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
  **/
  postModalitiesIdQuery(
    req: operations.PostModalitiesIdQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdQueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/query", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdQuery200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdStorageCommitment - Trigger storage commitment request
   *
   * Trigger a storage commitment request to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
  **/
  postModalitiesIdStorageCommitment(
    req: operations.PostModalitiesIdStorageCommitmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdStorageCommitmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdStorageCommitmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/storage-commitment", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdStorageCommitmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdStorageCommitment200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdStore - Trigger C-STORE SCU
   *
   * Start a C-STORE SCU command as a job, in order to send DICOM resources stored locally to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#rest-store-scu
  **/
  postModalitiesIdStore(
    req: operations.PostModalitiesIdStoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdStoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdStoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/store", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdStoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdStore200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postModalitiesIdStoreStraight - Straight C-STORE SCU
   *
   * Synchronously send the DICOM instance in the POST body to the remote DICOM modality whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `storescu` from DCMTK or dcm4che.
  **/
  postModalitiesIdStoreStraight(
    req: operations.PostModalitiesIdStoreStraightRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostModalitiesIdStoreStraightResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostModalitiesIdStoreStraightRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}/store-straight", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostModalitiesIdStoreStraightResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postModalitiesIdStoreStraight200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPatientsIdAnonymize - Anonymize patient
   *
   * Start a job that will anonymize all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
  **/
  postPatientsIdAnonymize(
    req: operations.PostPatientsIdAnonymizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPatientsIdAnonymizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPatientsIdAnonymizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/anonymize", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPatientsIdAnonymizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPatientsIdAnonymize200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPatientsIdArchive - Create ZIP archive
   *
   * Create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  postPatientsIdArchive(
    req: operations.PostPatientsIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPatientsIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPatientsIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/archive", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPatientsIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPatientsIdArchive200ApplicationJsonAny = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * postPatientsIdAttachmentsNameCompress - Compress attachment
   *
   * Change the compression scheme that is used to store an attachment.
  **/
  postPatientsIdAttachmentsNameCompress(
    req: operations.PostPatientsIdAttachmentsNameCompressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPatientsIdAttachmentsNameCompressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPatientsIdAttachmentsNameCompressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/compress", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPatientsIdAttachmentsNameCompressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPatientsIdAttachmentsNameUncompress - Uncompress attachment
   *
   * Change the compression scheme that is used to store an attachment.
  **/
  postPatientsIdAttachmentsNameUncompress(
    req: operations.PostPatientsIdAttachmentsNameUncompressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPatientsIdAttachmentsNameUncompressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPatientsIdAttachmentsNameUncompressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/uncompress", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPatientsIdAttachmentsNameUncompressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPatientsIdAttachmentsNameVerifyMd5 - Verify attachment
   *
   * Verify that the attachment is not corrupted, by validating its MD5 hash
  **/
  postPatientsIdAttachmentsNameVerifyMd5(
    req: operations.PostPatientsIdAttachmentsNameVerifyMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPatientsIdAttachmentsNameVerifyMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPatientsIdAttachmentsNameVerifyMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}/verify-md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPatientsIdAttachmentsNameVerifyMd5Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPatientsIdAttachmentsNameVerifyMd5200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPatientsIdMedia - Create DICOMDIR media
   *
   * Create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL
  **/
  postPatientsIdMedia(
    req: operations.PostPatientsIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPatientsIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPatientsIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/media", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPatientsIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPatientsIdMedia200ApplicationJsonAny = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * postPatientsIdModify - Modify patient
   *
   * Start a job that will modify all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
  **/
  postPatientsIdModify(
    req: operations.PostPatientsIdModifyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPatientsIdModifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPatientsIdModifyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/modify", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPatientsIdModifyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPatientsIdModify200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPatientsIdReconstruct - Reconstruct tags of patient
   *
   * Reconstruct the main DICOM tags of the patient whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
  **/
  postPatientsIdReconstruct(
    req: operations.PostPatientsIdReconstructRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPatientsIdReconstructResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPatientsIdReconstructRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/reconstruct", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPatientsIdReconstructResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPeersIdStore - Send to Orthanc peer
   *
   * Send DICOM resources stored locally to some remote Orthanc peer whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#sending-one-resource
  **/
  postPeersIdStore(
    req: operations.PostPeersIdStoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPeersIdStoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPeersIdStoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/peers/{id}/store", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPeersIdStoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPeersIdStore200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPeersIdStoreStraight - Straight store to peer
   *
   * Synchronously send the DICOM instance in the POST body to the Orthanc peer whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `curl`.
  **/
  postPeersIdStoreStraight(
    req: operations.PostPeersIdStoreStraightRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPeersIdStoreStraightResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPeersIdStoreStraightRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/peers/{id}/store-straight", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPeersIdStoreStraightResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPeersIdStoreStraight200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postQueriesIdAnswersIndexQueryInstances - Query the child instances of an answer
   *
   * Issue a second DICOM C-FIND operation, in order to query the child instances associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
  **/
  postQueriesIdAnswersIndexQueryInstances(
    req: operations.PostQueriesIdAnswersIndexQueryInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostQueriesIdAnswersIndexQueryInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostQueriesIdAnswersIndexQueryInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/answers/{index}/query-instances", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostQueriesIdAnswersIndexQueryInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postQueriesIdAnswersIndexQueryInstances200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postQueriesIdAnswersIndexQuerySeries - Query the child series of an answer
   *
   * Issue a second DICOM C-FIND operation, in order to query the child series associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
  **/
  postQueriesIdAnswersIndexQuerySeries(
    req: operations.PostQueriesIdAnswersIndexQuerySeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostQueriesIdAnswersIndexQuerySeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostQueriesIdAnswersIndexQuerySeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/answers/{index}/query-series", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostQueriesIdAnswersIndexQuerySeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postQueriesIdAnswersIndexQuerySeries200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postQueriesIdAnswersIndexQueryStudies - Query the child studies of an answer
   *
   * Issue a second DICOM C-FIND operation, in order to query the child studies associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
  **/
  postQueriesIdAnswersIndexQueryStudies(
    req: operations.PostQueriesIdAnswersIndexQueryStudiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostQueriesIdAnswersIndexQueryStudiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostQueriesIdAnswersIndexQueryStudiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/answers/{index}/query-studies", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostQueriesIdAnswersIndexQueryStudiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postQueriesIdAnswersIndexQueryStudies200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postQueriesIdAnswersIndexRetrieve - Retrieve one answer
   *
   * Start a C-MOVE SCU command as a job, in order to retrieve one answer associated with the query/retrieve operation whose identifiers are provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
  **/
  postQueriesIdAnswersIndexRetrieve(
    req: operations.PostQueriesIdAnswersIndexRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostQueriesIdAnswersIndexRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostQueriesIdAnswersIndexRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/answers/{index}/retrieve", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostQueriesIdAnswersIndexRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postQueriesIdAnswersIndexRetrieve200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postQueriesIdRetrieve - Retrieve all answers
   *
   * Start a C-MOVE SCU command as a job, in order to retrieve all the answers associated with the query/retrieve operation whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
  **/
  postQueriesIdRetrieve(
    req: operations.PostQueriesIdRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostQueriesIdRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostQueriesIdRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/queries/{id}/retrieve", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostQueriesIdRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postQueriesIdRetrieve200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSeriesIdAnonymize - Anonymize series
   *
   * Start a job that will anonymize all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
  **/
  postSeriesIdAnonymize(
    req: operations.PostSeriesIdAnonymizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSeriesIdAnonymizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSeriesIdAnonymizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/anonymize", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSeriesIdAnonymizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postSeriesIdAnonymize200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSeriesIdArchive - Create ZIP archive
   *
   * Create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL
  **/
  postSeriesIdArchive(
    req: operations.PostSeriesIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSeriesIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSeriesIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/archive", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSeriesIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postSeriesIdArchive200ApplicationJsonAny = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * postSeriesIdAttachmentsNameCompress - Compress attachment
   *
   * Change the compression scheme that is used to store an attachment.
  **/
  postSeriesIdAttachmentsNameCompress(
    req: operations.PostSeriesIdAttachmentsNameCompressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSeriesIdAttachmentsNameCompressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSeriesIdAttachmentsNameCompressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/compress", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSeriesIdAttachmentsNameCompressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSeriesIdAttachmentsNameUncompress - Uncompress attachment
   *
   * Change the compression scheme that is used to store an attachment.
  **/
  postSeriesIdAttachmentsNameUncompress(
    req: operations.PostSeriesIdAttachmentsNameUncompressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSeriesIdAttachmentsNameUncompressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSeriesIdAttachmentsNameUncompressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/uncompress", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSeriesIdAttachmentsNameUncompressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSeriesIdAttachmentsNameVerifyMd5 - Verify attachment
   *
   * Verify that the attachment is not corrupted, by validating its MD5 hash
  **/
  postSeriesIdAttachmentsNameVerifyMd5(
    req: operations.PostSeriesIdAttachmentsNameVerifyMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSeriesIdAttachmentsNameVerifyMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSeriesIdAttachmentsNameVerifyMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}/verify-md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSeriesIdAttachmentsNameVerifyMd5Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postSeriesIdAttachmentsNameVerifyMd5200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSeriesIdMedia - Create DICOMDIR media
   *
   * Create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL
  **/
  postSeriesIdMedia(
    req: operations.PostSeriesIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSeriesIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSeriesIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/media", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSeriesIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postSeriesIdMedia200ApplicationJsonAny = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * postSeriesIdModify - Modify series
   *
   * Start a job that will modify all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
  **/
  postSeriesIdModify(
    req: operations.PostSeriesIdModifyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSeriesIdModifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSeriesIdModifyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/modify", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSeriesIdModifyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postSeriesIdModify200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSeriesIdReconstruct - Reconstruct tags of series
   *
   * Reconstruct the main DICOM tags of the series whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
  **/
  postSeriesIdReconstruct(
    req: operations.PostSeriesIdReconstructRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSeriesIdReconstructResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSeriesIdReconstructRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/reconstruct", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSeriesIdReconstructResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStorageCommitmentIdRemove - Remove after storage commitment
   *
   * Remove out of Orthanc, the DICOM instances that have been reported to have been properly received the storage commitment report whose identifier is provided in the URL. This is only possible if the `Status` of the storage commitment report is `Success`. https://book.orthanc-server.com/users/storage-commitment.html#removing-the-instances
  **/
  postStorageCommitmentIdRemove(
    req: operations.PostStorageCommitmentIdRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStorageCommitmentIdRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStorageCommitmentIdRemoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/storage-commitment/{id}/remove", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStorageCommitmentIdRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStudiesIdAnonymize - Anonymize study
   *
   * Start a job that will anonymize all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
  **/
  postStudiesIdAnonymize(
    req: operations.PostStudiesIdAnonymizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdAnonymizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdAnonymizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/anonymize", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdAnonymizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postStudiesIdAnonymize200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStudiesIdArchive - Create ZIP archive
   *
   * Create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL
  **/
  postStudiesIdArchive(
    req: operations.PostStudiesIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/archive", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postStudiesIdArchive200ApplicationJsonAny = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * postStudiesIdAttachmentsNameCompress - Compress attachment
   *
   * Change the compression scheme that is used to store an attachment.
  **/
  postStudiesIdAttachmentsNameCompress(
    req: operations.PostStudiesIdAttachmentsNameCompressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdAttachmentsNameCompressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdAttachmentsNameCompressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/compress", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdAttachmentsNameCompressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStudiesIdAttachmentsNameUncompress - Uncompress attachment
   *
   * Change the compression scheme that is used to store an attachment.
  **/
  postStudiesIdAttachmentsNameUncompress(
    req: operations.PostStudiesIdAttachmentsNameUncompressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdAttachmentsNameUncompressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdAttachmentsNameUncompressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/uncompress", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdAttachmentsNameUncompressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStudiesIdAttachmentsNameVerifyMd5 - Verify attachment
   *
   * Verify that the attachment is not corrupted, by validating its MD5 hash
  **/
  postStudiesIdAttachmentsNameVerifyMd5(
    req: operations.PostStudiesIdAttachmentsNameVerifyMd5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdAttachmentsNameVerifyMd5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdAttachmentsNameVerifyMd5Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}/verify-md5", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdAttachmentsNameVerifyMd5Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postStudiesIdAttachmentsNameVerifyMd5200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStudiesIdMedia - Create DICOMDIR media
   *
   * Create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL
  **/
  postStudiesIdMedia(
    req: operations.PostStudiesIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/media", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postStudiesIdMedia200ApplicationJsonAny = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * postStudiesIdMerge - Merge study
   *
   * Start a new job so as to move some DICOM resources into the DICOM study whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#merging
  **/
  postStudiesIdMerge(
    req: operations.PostStudiesIdMergeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdMergeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdMergeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/merge", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdMergeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postStudiesIdMerge200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStudiesIdModify - Modify study
   *
   * Start a job that will modify all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
  **/
  postStudiesIdModify(
    req: operations.PostStudiesIdModifyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdModifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdModifyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/modify", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdModifyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postStudiesIdModify200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStudiesIdReconstruct - Reconstruct tags of study
   *
   * Reconstruct the main DICOM tags of the study whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
  **/
  postStudiesIdReconstruct(
    req: operations.PostStudiesIdReconstructRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdReconstructResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdReconstructRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/reconstruct", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdReconstructResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStudiesIdSplit - Split study
   *
   * Start a new job so as to split the DICOM study whose Orthanc identifier is provided in the URL, by taking some of its children series or instances out of it and putting them into a brand new study (this new study is created by setting the `StudyInstanceUID` tag to a random identifier): https://book.orthanc-server.com/users/anonymization.html#splitting
  **/
  postStudiesIdSplit(
    req: operations.PostStudiesIdSplitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStudiesIdSplitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStudiesIdSplitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/split", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStudiesIdSplitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postStudiesIdSplit200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsBulkAnonymize - Anonymize a set of resources
   *
   * Start a job that will anonymize all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
  **/
  postToolsBulkAnonymize(
    req: operations.PostToolsBulkAnonymizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsBulkAnonymizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsBulkAnonymizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/bulk-anonymize";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsBulkAnonymizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postToolsBulkAnonymize200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsBulkContent - Describe a set of instances
   *
   * Get the content all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field, in one single call.
  **/
  postToolsBulkContent(
    req: operations.PostToolsBulkContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsBulkContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsBulkContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/bulk-content";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsBulkContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsBulkDelete - Delete a set of instances
   *
   * Delete all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
  **/
  postToolsBulkDelete(
    req: operations.PostToolsBulkDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsBulkDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsBulkDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/bulk-delete";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsBulkDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsBulkModify - Modify a set of resources
   *
   * Start a job that will modify all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
  **/
  postToolsBulkModify(
    req: operations.PostToolsBulkModifyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsBulkModifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsBulkModifyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/bulk-modify";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsBulkModifyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postToolsBulkModify200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsCreateArchive - Create ZIP archive
   *
   * Create a ZIP archive containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
  **/
  postToolsCreateArchive(
    req: operations.PostToolsCreateArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsCreateArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsCreateArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/create-archive";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsCreateArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postToolsCreateArchive200ApplicationJsonAny = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * postToolsCreateDicom - Create one DICOM instance
   *
   * Create one DICOM instance, and store it into Orthanc
  **/
  postToolsCreateDicom(
    req: operations.PostToolsCreateDicomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsCreateDicomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsCreateDicomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/create-dicom";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsCreateDicomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postToolsCreateDicom200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsCreateMedia - Create DICOMDIR media
   *
   * Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
  **/
  postToolsCreateMedia(
    req: operations.PostToolsCreateMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsCreateMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsCreateMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/create-media";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsCreateMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postToolsCreateMedia200ApplicationJsonAny = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * postToolsCreateMediaExtended - Create DICOMDIR media
   *
   * Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
  **/
  postToolsCreateMediaExtended(
    req: operations.PostToolsCreateMediaExtendedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsCreateMediaExtendedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsCreateMediaExtendedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/create-media-extended";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsCreateMediaExtendedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postToolsCreateMediaExtended200ApplicationJsonAny = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/zip`)) {
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
   * postToolsDicomEcho - Trigger C-ECHO SCU
   *
   * Trigger C-ECHO SCU command against a DICOM modality described in the POST body, without having to register the modality in some `/modalities/{id}` (new in Orthanc 1.8.1)
  **/
  postToolsDicomEcho(
    req: operations.PostToolsDicomEchoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsDicomEchoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsDicomEchoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/dicom-echo";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsDicomEchoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsExecuteScript - Execute Lua script
   *
   * Execute the provided Lua script by the Orthanc server. This is very insecure for Orthanc servers that are remotely accessible, cf. configuration option `ExecuteLuaEnabled`
  **/
  postToolsExecuteScript(
    req: operations.PostToolsExecuteScriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsExecuteScriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsExecuteScriptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/execute-script";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsExecuteScriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
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
   * postToolsFind - Look for local resources
   *
   * This URI can be used to perform a search on the content of the local Orthanc server, in a way that is similar to querying remote DICOM modalities using C-FIND SCU: https://book.orthanc-server.com/users/rest.html#performing-finds-within-orthanc
  **/
  postToolsFind(
    req: operations.PostToolsFindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsFindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsFindRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/find";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsFindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postToolsFind200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsInvalidateTags - Invalidate DICOM-as-JSON summaries
   *
   * Remove all the attachments of the type "DICOM-as-JSON" that are associated will all the DICOM instances stored in Orthanc. These summaries will be automatically re-created on the next access. This is notably useful after changes to the `Dictionary` configuration option. https://book.orthanc-server.com/faq/orthanc-storage.html#storage-area
  **/
  postToolsInvalidateTags(
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsInvalidateTagsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/invalidate-tags";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsInvalidateTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsLookup - Look for DICOM identifiers
   *
   * This URI can be used to convert one DICOM identifier to a list of matching Orthanc resources
  **/
  postToolsLookup(
    req: operations.PostToolsLookupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsLookupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostToolsLookupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/lookup";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsLookupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postToolsLookup200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsReconstruct - Reconstruct all the index
   *
   * Reconstruct the index of all the tags of all the DICOM instances that are stored in Orthanc. This is notably useful after the deletion of resources whose children resources have inconsistent values with their sibling resources. Beware that this is a highly time-consuming operation, as all the DICOM instances will be parsed again, and as all the Orthanc index will be regenerated.
  **/
  postToolsReconstruct(
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsReconstructResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/reconstruct";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsReconstructResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsReset - Restart Orthanc
   *
   * Restart Orthanc
  **/
  postToolsReset(
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsResetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/reset";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsResetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postToolsShutdown - Shutdown Orthanc
   *
   * Shutdown Orthanc
  **/
  postToolsShutdown(
    config?: AxiosRequestConfig
  ): Promise<operations.PostToolsShutdownResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/shutdown";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostToolsShutdownResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putInstancesIdAttachmentsName - Set attachment
   *
   * Attach a file to the given DICOM instance. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
  **/
  putInstancesIdAttachmentsName(
    req: operations.PutInstancesIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutInstancesIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutInstancesIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/attachments/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutInstancesIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putInstancesIdAttachmentsName200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putInstancesIdMetadataName - Set metadata
   *
   * Set the value of some metadata in the given DICOM instance. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
  **/
  putInstancesIdMetadataName(
    req: operations.PutInstancesIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutInstancesIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutInstancesIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/instances/{id}/metadata/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutInstancesIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putModalitiesId - Update DICOM modality
   *
   * Define a new DICOM modality, or update an existing one. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
  **/
  putModalitiesId(
    req: operations.PutModalitiesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutModalitiesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutModalitiesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/modalities/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutModalitiesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putPatientsIdAttachmentsName - Set attachment
   *
   * Attach a file to the given DICOM patient. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
  **/
  putPatientsIdAttachmentsName(
    req: operations.PutPatientsIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutPatientsIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutPatientsIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/attachments/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutPatientsIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putPatientsIdAttachmentsName200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putPatientsIdMetadataName - Set metadata
   *
   * Set the value of some metadata in the given DICOM patient. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
  **/
  putPatientsIdMetadataName(
    req: operations.PutPatientsIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutPatientsIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutPatientsIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/metadata/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutPatientsIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putPatientsIdProtected - Protect one patient against recycling
   *
   * Check out configuration options `MaximumStorageSize` and `MaximumPatientCount`
  **/
  putPatientsIdProtected(
    req: operations.PutPatientsIdProtectedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutPatientsIdProtectedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutPatientsIdProtectedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/patients/{id}/protected", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutPatientsIdProtectedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putPeersId - Update Orthanc peer
   *
   * Define a new Orthanc peer, or update an existing one. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
  **/
  putPeersId(
    req: operations.PutPeersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutPeersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutPeersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/peers/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutPeersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putSeriesIdAttachmentsName - Set attachment
   *
   * Attach a file to the given DICOM series. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
  **/
  putSeriesIdAttachmentsName(
    req: operations.PutSeriesIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSeriesIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSeriesIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/attachments/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSeriesIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putSeriesIdAttachmentsName200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putSeriesIdMetadataName - Set metadata
   *
   * Set the value of some metadata in the given DICOM series. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
  **/
  putSeriesIdMetadataName(
    req: operations.PutSeriesIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSeriesIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSeriesIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/series/{id}/metadata/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSeriesIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putStudiesIdAttachmentsName - Set attachment
   *
   * Attach a file to the given DICOM study. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
  **/
  putStudiesIdAttachmentsName(
    req: operations.PutStudiesIdAttachmentsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutStudiesIdAttachmentsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutStudiesIdAttachmentsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/attachments/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutStudiesIdAttachmentsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putStudiesIdAttachmentsName200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putStudiesIdMetadataName - Set metadata
   *
   * Set the value of some metadata in the given DICOM study. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
  **/
  putStudiesIdMetadataName(
    req: operations.PutStudiesIdMetadataNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutStudiesIdMetadataNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutStudiesIdMetadataNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/studies/{id}/metadata/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutStudiesIdMetadataNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsAcceptedTransferSyntaxes - Set accepted transfer syntaxes
   *
   * Set the DICOM transfer syntaxes that accepted by Orthanc C-STORE SCP
  **/
  putToolsAcceptedTransferSyntaxes(
    req: operations.PutToolsAcceptedTransferSyntaxesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsAcceptedTransferSyntaxesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsAcceptedTransferSyntaxesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/accepted-transfer-syntaxes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsAcceptedTransferSyntaxesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putToolsAcceptedTransferSyntaxes200ApplicationJsonAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsDefaultEncoding - Set default encoding
   *
   * Change the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.
  **/
  putToolsDefaultEncoding(
    req: operations.PutToolsDefaultEncodingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsDefaultEncodingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsDefaultEncodingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/default-encoding";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsDefaultEncodingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsLogLevel - Set main log level
   *
   * Set the main log level of Orthanc
  **/
  putToolsLogLevel(
    req: operations.PutToolsLogLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsLogLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsLogLevelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsLogLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsLogLevelDicom - Set log level for `dicom`
   *
   * Set the log level of the log category `dicom`
  **/
  putToolsLogLevelDicom(
    req: operations.PutToolsLogLevelDicomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsLogLevelDicomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsLogLevelDicomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-dicom";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsLogLevelDicomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsLogLevelGeneric - Set log level for `generic`
   *
   * Set the log level of the log category `generic`
  **/
  putToolsLogLevelGeneric(
    req: operations.PutToolsLogLevelGenericRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsLogLevelGenericResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsLogLevelGenericRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-generic";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsLogLevelGenericResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsLogLevelHttp - Set log level for `http`
   *
   * Set the log level of the log category `http`
  **/
  putToolsLogLevelHttp(
    req: operations.PutToolsLogLevelHttpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsLogLevelHttpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsLogLevelHttpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-http";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsLogLevelHttpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsLogLevelJobs - Set log level for `jobs`
   *
   * Set the log level of the log category `jobs`
  **/
  putToolsLogLevelJobs(
    req: operations.PutToolsLogLevelJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsLogLevelJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsLogLevelJobsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-jobs";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsLogLevelJobsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsLogLevelLua - Set log level for `lua`
   *
   * Set the log level of the log category `lua`
  **/
  putToolsLogLevelLua(
    req: operations.PutToolsLogLevelLuaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsLogLevelLuaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsLogLevelLuaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-lua";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsLogLevelLuaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsLogLevelPlugins - Set log level for `plugins`
   *
   * Set the log level of the log category `plugins`
  **/
  putToolsLogLevelPlugins(
    req: operations.PutToolsLogLevelPluginsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsLogLevelPluginsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsLogLevelPluginsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-plugins";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsLogLevelPluginsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsLogLevelSqlite - Set log level for `sqlite`
   *
   * Set the log level of the log category `sqlite`
  **/
  putToolsLogLevelSqlite(
    req: operations.PutToolsLogLevelSqliteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsLogLevelSqliteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsLogLevelSqliteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/log-level-sqlite";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsLogLevelSqliteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsMetrics - Enable collection of metrics
   *
   * Enable or disable the collection and publication of metrics at `/tools/metrics-prometheus`
  **/
  putToolsMetrics(
    req: operations.PutToolsMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsMetricsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/metrics";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putToolsUnknownSopClassAccepted - Set unknown SOP class accepted
   *
   * Set whether Orthanc C-STORE SCP should accept DICOM instances with an unknown SOP class UID
  **/
  putToolsUnknownSopClassAccepted(
    req: operations.PutToolsUnknownSopClassAcceptedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutToolsUnknownSopClassAcceptedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutToolsUnknownSopClassAcceptedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tools/unknown-sop-class-accepted";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutToolsUnknownSopClassAcceptedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
