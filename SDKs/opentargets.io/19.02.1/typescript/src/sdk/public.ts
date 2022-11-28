import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Public {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getAssociationById - Get association by id
   *
   * Once we integrate all evidence connecting a target to a specific disease, we
   *  compute an association score by the means of an harmonic sum. This *association score* provides
   *  an indication of how strong the evidence behind each connection is and can be
   *  used to rank genes in order of likelihood as drug targets.
   *  The association ID is constructed by using the Ensembl ID of the gene and the
   *  EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
   *  The method returns an association object, which contains the data and summary
   *  on each evidence type included in the calculation of the score, as well as the score itself.
   * 
  **/
  getAssociationById(
    req: operations.GetAssociationByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAssociationByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAssociationByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/association";
    
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
        const res: operations.GetAssociationByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAssociationFilter - Filter available associations
   *
   * More complex queries for associations scores and objects can be done using
   * this method, which allows to sort in different order, restrict to a specific class
   * of diseases or targets, as well as filtering results by score and associated pathways.
   * 
  **/
  getAssociationFilter(
    req: operations.GetAssociationFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAssociationFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAssociationFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/association/filter";
    
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
        const res: operations.GetAssociationFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDataMetrics - Get metrics about the current data release
   *
   * Returns the metrics about associations and evidences, divided by datasource, genes and so on.
   * 
  **/
  getDataMetrics(
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataMetricsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/utils/metrics";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDataStats - Get statistics about the current data release
   *
   * Returns the number of associations and evidences, divided by datasource.
   * 
  **/
  getDataStats(
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataStatsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/utils/stats";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEvidenceById - Get evidence by ID
   *
   * We call **evidence** a unit of data that support a connection between a target and a disease.
   * The Open Targets Platform integrates multiple types of evidence including genetic associations,
   * somatic mutations, RNA expression and target-disease associations mined from the literature.
   * This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
   * targetvalidation.org ID.
   * 
   * Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
   * You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).
   * 
   * **Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.
   * 
  **/
  getEvidenceById(
    req: operations.GetEvidenceByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEvidenceByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEvidenceByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/evidence";
    
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
        const res: operations.GetEvidenceByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEvidenceFilter - Filter available evidence
   *
   * The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
   * Filters can be used to restrict the results by source and type of data,
   * or limit results to targets which are part of a particular pathway.
   * Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
   * **Note** that multiple genes and diseases can be specified in the same request.
   * 
  **/
  getEvidenceFilter(
    req: operations.GetEvidenceFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEvidenceFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEvidenceFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/evidence/filter";
    
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
        const res: operations.GetEvidenceFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPing - Ping service
   *
   * Check if the API is up
   * 
  **/
  getPing(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPingResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/utils/ping";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSearch - Search for a disease or a target
   *
   * This method allows you to look for gene or diseases of interest using a free text search,
   * replicating the functionality of the search box on our homepage. It should be used to identify
   * the best match for a disease or target of interest, rather than gathering a specific set of evidence.
   * 
  **/
  getSearch(
    req: operations.GetSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/search";
    
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
        const res: operations.GetSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTherapeuticAreas - Get the list of therapeutic areas about the current data release
   *
   * Returns the list of therapeutic areas for the current data release
   * 
  **/
  getTherapeuticAreas(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTherapeuticAreasResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/utils/therapeuticareas";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTherapeuticAreasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVersion - Get API version
   *
   * Returns current API version.
   * 
  **/
  getVersion(
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/utils/version";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssociationFilter - Batch query available associations
   *
   * Complex queries and filters for association objects can also be submitted using a JSON
   * object and the equivalent POST method.
   * 
  **/
  postAssociationFilter(
    req: operations.PostAssociationFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssociationFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssociationFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/association/filter";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.PostAssociationFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postEvidenceById - Get evidence for a list of IDs
   *
   * This is the POST version of [/public/evidence](#!/public/get_public_evidence).
   * It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.
   * 
  **/
  postEvidenceById(
    req: operations.PostEvidenceByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEvidenceByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEvidenceByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/evidence";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.PostEvidenceByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postEvidenceFilter - Batch filter available evidence
   *
   * POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
   * Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.
   * 
  **/
  postEvidenceFilter(
    req: operations.PostEvidenceFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEvidenceFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEvidenceFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/evidence/filter";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.PostEvidenceFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
