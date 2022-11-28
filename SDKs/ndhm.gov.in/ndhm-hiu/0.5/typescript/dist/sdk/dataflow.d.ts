import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DataFlow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05HealthInformationHiuOnRequest - Health information data request
     *
     * Callback API for acknowledgement of Health information request made by HIU. Gateway calls this API when request has validated for the specified  consent id. Either the **hiRequest** or **error** would be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
     *   1. **Invalid consent artefact id**
     *   2. **Consent has expired**
     *   3. **Date ranges are invalid**
     *
    **/
    postV05HealthInformationHiuOnRequest(req: operations.PostV05HealthInformationHiuOnRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHiuOnRequestResponse>;
    /**
     * postV05HealthInformationTransfer - health information transfer API
     *
     * **NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway.
     *   1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU.
     *   2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred.
     *   3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request.
     *   4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
     *   5. checksum is Md5 checksum of the data conent, before encryption
     *   6. Please refer to the NDHM Sandbox documentation for the format of FHIR bundle that is passed through content
     *
    **/
    postV05HealthInformationTransfer(req: operations.PostV05HealthInformationTransferRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationTransferResponse>;
}
