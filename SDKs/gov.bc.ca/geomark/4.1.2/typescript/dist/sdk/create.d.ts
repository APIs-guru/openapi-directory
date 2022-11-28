import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Create {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postGeomarksCopy - Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
     *
     * The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
    **/
    postGeomarksCopy(req: operations.PostGeomarksCopyRequest, config?: AxiosRequestConfig): Promise<operations.PostGeomarksCopyResponse>;
    /**
     * postGeomarksNew - Create a new geomark
     *
     * Create a new geomark from the geometries read from the 'body' parameter or file.
    **/
    postGeomarksNew(req: operations.PostGeomarksNewRequest, config?: AxiosRequestConfig): Promise<operations.PostGeomarksNewResponse>;
}
