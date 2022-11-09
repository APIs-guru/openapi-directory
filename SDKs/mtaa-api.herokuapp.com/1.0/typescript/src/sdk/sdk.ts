import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://mtaa-api.herokuapp.com/api",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // DistrictsInARegion - Returns all districts in region
  /** 
   * Returns a post code and all districts in a specified region
  **/
  DistrictsInARegion(
    req: operations.DistrictsInARegionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DistrictsInARegionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DistrictsInARegionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{country}/{region}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DistrictsInARegionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TanzaniaRegions - Returns all regions present in Tanzania
  /** 
   * Fetches all regions present in Tanzania and then return a response as json
  **/
  TanzaniaRegions(
    req: operations.TanzaniaRegionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TanzaniaRegionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TanzaniaRegionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{country}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TanzaniaRegionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // WardsInADistrict - Returns all wards in a district
  /** 
   * Returns all wards in a  specified district and district postcode
  **/
  WardsInADistrict(
    req: operations.WardsInADistrictRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WardsInADistrictResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WardsInADistrictRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{country}/{region}/{district}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.WardsInADistrictResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // NeighborhoodInAStreet - Returns all neighborhood in a street
  /** 
   * Returns all neighborhood in a specified street
  **/
  NeighborhoodInAStreet(
    req: operations.NeighborhoodInAStreetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NeighborhoodInAStreetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NeighborhoodInAStreetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{country}/{region}/{district}/{ward}/{street}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.NeighborhoodInAStreetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StreetsInAWard - Returns all streets in a ward
  /** 
   * Returns all streets in a specified ward and ward postcode
  **/
  StreetsInAWard(
    req: operations.StreetsInAWardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StreetsInAWardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StreetsInAWardRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{country}/{region}/{district}/{ward}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StreetsInAWardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
