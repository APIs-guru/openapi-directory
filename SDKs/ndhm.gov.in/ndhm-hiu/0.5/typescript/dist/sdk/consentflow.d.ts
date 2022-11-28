import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConsentFlow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05ConsentRequestsOnInit - Response to consent request
     *
     * Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
     *   Reasons for error may be
     *   * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission
     *
    **/
    postV05ConsentRequestsOnInit(req: operations.PostV05ConsentRequestsOnInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnInitResponse>;
    /**
     * postV05ConsentRequestsOnStatus - Result of consent request status
     *
     * Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then
     *
    **/
    postV05ConsentRequestsOnStatus(req: operations.PostV05ConsentRequestsOnStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnStatusResponse>;
    /**
     * postV05ConsentsHiuNotify - Consent notification
     *
     * Health information user will get notified about the consent request granted or denied, consent revoked, consent expired.
     * 1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
     * 2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
     * 3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
     * 4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids
     *
    **/
    postV05ConsentsHiuNotify(req: operations.PostV05ConsentsHiuNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuNotifyResponse>;
    /**
     * postV05ConsentsOnFetch - Result of fetch request for a consent artefact
     *
     * Must contain either consent or error. Possible reason of errors are
     * 1. consentId passed through /fetch is invalid
     *
    **/
    postV05ConsentsOnFetch(req: operations.PostV05ConsentsOnFetchRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsOnFetchResponse>;
}
