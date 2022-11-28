import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SigningBasketsServiceSbs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createSigningBasket - Create a signing basket resource
     *
     * Create a signing basket resource for authorising several transactions with one SCA method.
     * The resource identifications of these transactions are contained in the payload of this access method
     *
    **/
    createSigningBasket(req: operations.CreateSigningBasketRequest, config?: AxiosRequestConfig): Promise<operations.CreateSigningBasketResponse>;
    /**
     * deleteSigningBasket - Delete the signing basket
     *
     * Delete the signing basket structure as long as no (partial) authorisation has yet been applied.
     * The undlerying transactions are not affected by this deletion.
     *
     * Remark: The signing basket as such is not deletable after a first (partial) authorisation has been applied.
     * Nevertheless, single transactions might be cancelled on an individual basis on the XS2A interface.
     *
    **/
    deleteSigningBasket(req: operations.DeleteSigningBasketRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSigningBasketResponse>;
    /**
     * getSigningBasket - Returns the content of an signing basket object
     *
     * Returns the content of a signing basket object.
    **/
    getSigningBasket(req: operations.GetSigningBasketRequest, config?: AxiosRequestConfig): Promise<operations.GetSigningBasketResponse>;
    /**
     * getSigningBasketAuthorisation - Get signing basket authorisation sub-resources request
     *
     * Read a list of all authorisation subresources IDs which have been created.
     *
     * This function returns an array of hyperlinks to all generated authorisation sub-resources.
     *
    **/
    getSigningBasketAuthorisation(req: operations.GetSigningBasketAuthorisationRequest, config?: AxiosRequestConfig): Promise<operations.GetSigningBasketAuthorisationResponse>;
    /**
     * getSigningBasketScaStatus - Read the SCA status of the signing basket authorisation
     *
     * This method returns the SCA status of a signing basket's authorisation sub-resource.
     *
    **/
    getSigningBasketScaStatus(req: operations.GetSigningBasketScaStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetSigningBasketScaStatusResponse>;
    /**
     * getSigningBasketStatus - Read the status of the signing basket
     *
     * Returns the status of a signing basket object.
     *
    **/
    getSigningBasketStatus(req: operations.GetSigningBasketStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetSigningBasketStatusResponse>;
    /**
     * startSigningBasketAuthorisation - Start the authorisation process for a signing basket
     *
     * Create an authorisation sub-resource and start the authorisation process of a signing basket.
     * The message might in addition transmit authentication and authorisation related data.
     *
     * This method is iterated n times for a n times SCA authorisation in a
     * corporate context, each creating an own authorisation sub-endpoint for
     * the corresponding PSU authorising the signing-baskets.
     *
     * The ASPSP might make the usage of this access method unnecessary in case
     * of only one SCA process needed, since the related authorisation resource
     * might be automatically created by the ASPSP after the submission of the
     * payment data with the first POST signing basket call.
     *
     * The start authorisation process is a process which is needed for creating a new authorisation
     * or cancellation sub-resource.
     *
     * This applies in the following scenarios:
     *
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment
     *     initiation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
     *     uploaded by using the extended forms:
     *     * 'startAuthorisationWithPsuIdentfication',
     *     * 'startAuthorisationWithPsuAuthentication'
     *     * 'startAuthorisationWithEncryptedPsuAuthentication'
     *     * 'startAuthorisationWithAuthentciationMethodSelection'
     *   * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding
     *     payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
     *     by using the extended forms as indicated above.
     *   * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
     *     executing the cancellation.
     *   * The signing basket needs to be authorised yet.
     *
    **/
    startSigningBasketAuthorisation(req: operations.StartSigningBasketAuthorisationRequest, config?: AxiosRequestConfig): Promise<operations.StartSigningBasketAuthorisationResponse>;
    /**
     * updateSigningBasketPsuData - Update PSU data for signing basket
     *
     * This method update PSU data on the signing basket resource if needed.
     * It may authorise a igning basket within the embedded SCA approach where needed.
     *
     * Independently from the SCA Approach it supports e.g. the selection of
     * the authentication method and a non-SCA PSU authentication.
     *
     * There are several possible update PSU data requests in the context of a consent request if needed,
     * which depends on the SCA approach:
     *
     * * Redirect SCA Approach:
     *   A specific Update PSU data request is applicable for
     *     * the selection of authentication methods, before choosing the actual SCA approach.
     * * Decoupled SCA Approach:
     *   A specific Update PSU data request is only applicable for
     *   * adding the PSU Identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
     *   * the selection of authentication methods.
     * * Embedded SCA Approach:
     *   The update PSU data request might be used
     *   * to add credentials as a first factor authentication data of the PSU and
     *   * to select the authentication method and
     *   * transaction authorisation.
     *
     * The SCA approach might depend on the chosen SCA method.
     * For that reason, the following possible update PSU data request can apply to all SCA approaches:
     *
     * * Select an SCA method in case of several SCA methods are available for the customer.
     *
     * There are the following request types on this access path:
     *   * Update PSU identification
     *   * Update PSU authentication
     *   * Select PSU autorization Method
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *   * Transaction Authorisation
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *
    **/
    updateSigningBasketPsuData(req: operations.UpdateSigningBasketPsuDataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSigningBasketPsuDataResponse>;
}
