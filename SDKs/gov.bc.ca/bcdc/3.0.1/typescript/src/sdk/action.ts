import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Action {
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
   * getActionOrganizationActivityList - Get the activity stream of an organization
   *
   * Return an organization's activity stream
  **/
  getActionOrganizationActivityList(
    req: operations.GetActionOrganizationActivityListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionOrganizationActivityListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionOrganizationActivityListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/organization_activity_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionOrganizationActivityListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionOrganizationActivityListHtml - Get the activity stream of an organization, HTML format
   *
   * Return an organization's activity stream as HTML
  **/
  getActionOrganizationActivityListHtml(
    req: operations.GetActionOrganizationActivityListHtmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionOrganizationActivityListHtmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionOrganizationActivityListHtmlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/organization_activity_list_html";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionOrganizationActivityListHtmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionOrganizationAutocomplete - Get names of organizations that match a query string
   *
   * Return a list of organization names that contain a string
  **/
  getActionOrganizationAutocomplete(
    req: operations.GetActionOrganizationAutocompleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionOrganizationAutocompleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionOrganizationAutocompleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/organization_autocomplete";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionOrganizationAutocompleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionOrganizationFollowerCount - Get number of followers of an organization
   *
   * Return the number of followers of an organization
  **/
  getActionOrganizationFollowerCount(
    req: operations.GetActionOrganizationFollowerCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionOrganizationFollowerCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionOrganizationFollowerCountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/organization_follower_count";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionOrganizationFollowerCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionOrganizationFollowerList - Get users following an organization
   *
   * Return a list of users that are following a given organization
  **/
  getActionOrganizationFollowerList(
    req: operations.GetActionOrganizationFollowerListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionOrganizationFollowerListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionOrganizationFollowerListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/organization_follower_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionOrganizationFollowerListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionOrganizationList - Get names of all organizations
   *
   * Returns the names of all indexed organizations
  **/
  getActionOrganizationList(
    req: operations.GetActionOrganizationListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionOrganizationListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionOrganizationListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/organization_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionOrganizationListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionOrganizationListForUser - Get organizations that a user has a given permission for
   *
   * Return the organizations that the user has a given permission for
  **/
  getActionOrganizationListForUser(
    req: operations.GetActionOrganizationListForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionOrganizationListForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionOrganizationListForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/organization_list_for_user";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionOrganizationListForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionOrganizationRevisionList - Get organization revisions
   *
   * Return an organization's revisions
  **/
  getActionOrganizationRevisionList(
    req: operations.GetActionOrganizationRevisionListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionOrganizationRevisionListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionOrganizationRevisionListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/organization_revision_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionOrganizationRevisionListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionOrganizationShow - Get details of a specific organization
   *
   * Return the details of an organization
  **/
  getActionOrganizationShow(
    req: operations.GetActionOrganizationShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionOrganizationShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionOrganizationShowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/organization_show";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionOrganizationShowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionPackageActivityList - Get the activity stream of a package (dataset)
   *
   * Returns a package's activity stream
  **/
  getActionPackageActivityList(
    req: operations.GetActionPackageActivityListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionPackageActivityListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionPackageActivityListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/package_activity_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionPackageActivityListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionPackageActivityListHtml - Get the activity stream of a package (dataset), HTML format
   *
   * The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.
  **/
  getActionPackageActivityListHtml(
    req: operations.GetActionPackageActivityListHtmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionPackageActivityListHtmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionPackageActivityListHtmlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/package_activity_list_html";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionPackageActivityListHtmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionPackageAutocomplete - Find packages (datasets) matching a query
   *
   * Return a list of datasets that match a string
  **/
  getActionPackageAutocomplete(
    req: operations.GetActionPackageAutocompleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionPackageAutocompleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionPackageAutocompleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/package_autocomplete";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionPackageAutocompleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionPackageList - Get a list of all packages (datasets)
   *
   * Returns the names of all indexed packages (datasets)
  **/
  getActionPackageList(
    req: operations.GetActionPackageListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionPackageListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionPackageListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/package_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionPackageListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionPackageRelationshipsList - Get package (dataset) relationships
   *
   * Return a dataset's relationships
  **/
  getActionPackageRelationshipsList(
    req: operations.GetActionPackageRelationshipsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionPackageRelationshipsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionPackageRelationshipsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/package_relationships_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionPackageRelationshipsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionPackageRevisionList - Get list of revisions for a package (dataset)
   *
   * Return a dataset's revision as a list of dictionaries
  **/
  getActionPackageRevisionList(
    req: operations.GetActionPackageRevisionListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionPackageRevisionListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionPackageRevisionListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/package_revision_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionPackageRevisionListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionPackageSearch - Find packages (datasets) matching query terms
   *
   * Searches for packages (datasets) matching the specified query terms
  **/
  getActionPackageSearch(
    req: operations.GetActionPackageSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionPackageSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionPackageSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/package_search";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionPackageSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionPackageShow - Get metadata about one specific package (dataset)
   *
   * Returns metadata about the package (dataset) corresponding to the specified unique name
  **/
  getActionPackageShow(
    req: operations.GetActionPackageShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionPackageShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionPackageShowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/package_show";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionPackageShowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionRelatedList - Gets items related to a package (dataset)
   *
   * Returns a dataset's related items.
  **/
  getActionRelatedList(
    req: operations.GetActionRelatedListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionRelatedListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionRelatedListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/related_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionRelatedListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionResourceSearch - Find resources
   *
   * Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.
  **/
  getActionResourceSearch(
    req: operations.GetActionResourceSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionResourceSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionResourceSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/resource_search";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionResourceSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionResourceShow - Get metadata for a specific resource
   *
   * Return the metadata of a resource
  **/
  getActionResourceShow(
    req: operations.GetActionResourceShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionResourceShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionResourceShowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/resource_show";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionResourceShowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionStatusShow - Get the site status
   *
   * Returns the site status
  **/
  getActionStatusShow(
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionStatusShowResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/status_show";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetActionStatusShowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActionTagList - Get a list of tags
   *
   * Returns the names of all indexed tags
  **/
  getActionTagList(
    req: operations.GetActionTagListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionTagListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionTagListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/action/tag_list";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetActionTagListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
