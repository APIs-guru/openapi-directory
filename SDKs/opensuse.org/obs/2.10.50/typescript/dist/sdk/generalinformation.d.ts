import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GeneralInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAbout - Get information about API.
     *
     * Get generic information about the API.
    **/
    getAbout(config?: AxiosRequestConfig): Promise<operations.GetAboutResponse>;
    /**
     * getArchitectures - List all known architectures.
     *
     * Get a list of all known architectures known to OBS in general. This is not the list of architectures provided by this instance. Check the schedulers element from the `/configuration` route for this.
     *
    **/
    getArchitectures(req: operations.GetArchitecturesRequest, config?: AxiosRequestConfig): Promise<operations.GetArchitecturesResponse>;
    /**
     * getArchitecturesArchitectureName - Show one architecture.
     *
     * Show information about one architecture.
    **/
    getArchitecturesArchitectureName(req: operations.GetArchitecturesArchitectureNameRequest, config?: AxiosRequestConfig): Promise<operations.GetArchitecturesArchitectureNameResponse>;
}
