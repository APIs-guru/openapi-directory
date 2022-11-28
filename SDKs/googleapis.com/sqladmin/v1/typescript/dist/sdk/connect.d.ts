import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Connect {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sqlConnectGenerateEphemeral - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
    **/
    sqlConnectGenerateEphemeral(req: operations.SqlConnectGenerateEphemeralRequest, config?: AxiosRequestConfig): Promise<operations.SqlConnectGenerateEphemeralResponse>;
    /**
     * sqlConnectGet - Retrieves connect settings about a Cloud SQL instance.
    **/
    sqlConnectGet(req: operations.SqlConnectGetRequest, config?: AxiosRequestConfig): Promise<operations.SqlConnectGetResponse>;
}
