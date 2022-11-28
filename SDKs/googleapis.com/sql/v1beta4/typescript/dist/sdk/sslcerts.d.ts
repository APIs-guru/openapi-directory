import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SslCerts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sqlSslCertsCreateEphemeral - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
    **/
    sqlSslCertsCreateEphemeral(req: operations.SqlSslCertsCreateEphemeralRequest, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsCreateEphemeralResponse>;
    /**
     * sqlSslCertsDelete - Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
    **/
    sqlSslCertsDelete(req: operations.SqlSslCertsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsDeleteResponse>;
    /**
     * sqlSslCertsGet - Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
    **/
    sqlSslCertsGet(req: operations.SqlSslCertsGetRequest, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsGetResponse>;
    /**
     * sqlSslCertsInsert - Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
    **/
    sqlSslCertsInsert(req: operations.SqlSslCertsInsertRequest, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsInsertResponse>;
    /**
     * sqlSslCertsList - Lists all of the current SSL certificates for the instance.
    **/
    sqlSslCertsList(req: operations.SqlSslCertsListRequest, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsListResponse>;
}
