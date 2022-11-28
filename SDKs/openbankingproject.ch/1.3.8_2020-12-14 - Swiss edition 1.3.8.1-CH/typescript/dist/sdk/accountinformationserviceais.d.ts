import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccountInformationServiceAis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createConsent - Create consent
     *
     * This method create a consent resource, defining access rights to dedicated accounts of
     * a given PSU-ID. These accounts are addressed explicitly in the method as
     * parameters as a core function.
     *
     * **Side Effects**
     * When this consent request is a request where the "recurringIndicator" equals "true",
     * and if it exists already a former consent for recurring access on account information
     * for the addressed PSU, then the former consent automatically expires as soon as the new
     * consent request is authorised by the PSU.
     *
     * Optional Extension:
     * As an option, an ASPSP might optionally accept a specific access right on the access on all PSD2 related services for all available accounts.
     *
     * As another option an ASPSP might optionally also accept a command, where only access rights are inserted without mentioning the addressed account.
     * The relation to accounts is then handled afterwards between PSU and ASPSP.
     * This option is not supported for the Embedded SCA Approach.
     * As a last option, an ASPSP might in addition accept a command with access rights
     *   * to see the list of available payment accounts or
     *   * to see the list of available payment accounts with balances.
     *
    **/
    createConsent(req: operations.CreateConsentRequest, config?: AxiosRequestConfig): Promise<operations.CreateConsentResponse>;
    /**
     * deleteConsent - Delete Consent
     *
     * The TPP can delete an account information consent object if needed.
    **/
    deleteConsent(req: operations.DeleteConsentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConsentResponse>;
    /**
     * getAccountList - Read account list
     *
     * Read the identifiers of the available payment account together with
     * booking balance information, depending on the consent granted.
     *
     * It is assumed that a consent of the PSU to this access is already given and stored on the ASPSP system.
     * The addressed list of accounts depends then on the PSU ID and the stored consent addressed by consentId,
     * respectively the OAuth2 access token.
     *
     * Returns all identifiers of the accounts, to which an account access has been granted to through
     * the /consents endpoint by the PSU.
     * In addition, relevant information about the accounts and hyperlinks to corresponding account
     * information resources are provided if a related consent has been already granted.
     *
     * Remark: Note that the /consents endpoint optionally offers to grant an access on all available
     * payment accounts of a PSU.
     * In this case, this endpoint will deliver the information about all available payment accounts
     * of the PSU at this ASPSP.
     *
    **/
    getAccountList(req: operations.GetAccountListRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountListResponse>;
    /**
     * getBalances - Read balance
     *
     * Reads account data from a given account addressed by "account-id".
     *
     * **Remark:** This account-id can be a tokenised identification due to data protection reason since the path
     * information might be logged on intermediary servers within the ASPSP sphere.
     * This account-id then can be retrieved by the "Get account list" call.
     *
     * The account-id is constant at least throughout the lifecycle of a given consent.
     *
    **/
    getBalances(req: operations.GetBalancesRequest, config?: AxiosRequestConfig): Promise<operations.GetBalancesResponse>;
    /**
     * getConsentAuthorisation - Get consent authorisation sub-resources request
     *
     * Return a list of all authorisation subresources IDs which have been created.
     *
     * This function returns an array of hyperlinks to all generated authorisation sub-resources.
     *
    **/
    getConsentAuthorisation(req: operations.GetConsentAuthorisationRequest, config?: AxiosRequestConfig): Promise<operations.GetConsentAuthorisationResponse>;
    /**
     * getConsentInformation - Get consent request
     *
     * Returns the content of an account information consent object.
     * This is returning the data for the TPP especially in cases,
     * where the consent was directly managed between ASPSP and PSU e.g. in a redirect SCA Approach.
     *
    **/
    getConsentInformation(req: operations.GetConsentInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetConsentInformationResponse>;
    /**
     * getConsentScaStatus - Read the SCA status of the consent authorisation
     *
     * This method returns the SCA status of a consent initiation's authorisation sub-resource.
     *
    **/
    getConsentScaStatus(req: operations.GetConsentScaStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetConsentScaStatusResponse>;
    /**
     * getConsentStatus - Consent status request
     *
     * Read the status of an account information consent resource.
    **/
    getConsentStatus(req: operations.GetConsentStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetConsentStatusResponse>;
    /**
     * getTransactionDetails - Read transaction details
     *
     * Reads transaction details from a given transaction addressed by "transactionId" on a given account addressed by "account-id".
     * This call is only available on transactions as reported in a JSON format.
     *
     * **Remark:** Please note that the PATH might be already given in detail by the corresponding entry of the response of the
     * "Read Transaction List" call within the _links subfield.
     *
    **/
    getTransactionDetails(req: operations.GetTransactionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionDetailsResponse>;
    /**
     * getTransactionList - Read transaction list of an account
     *
     * Read transaction reports or transaction lists of a given account ddressed by "account-id", depending on the steering parameter
     * "bookingStatus" together with balances.
     *
     * For a given account, additional parameters are e.g. the attributes "dateFrom" and "dateTo".
     * The ASPSP might add balance information, if transaction lists without balances are not supported.
     *
    **/
    getTransactionList(req: operations.GetTransactionListRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionListResponse>;
    /**
     * readAccountDetails - Read account details
     *
     * Reads details about an account, with balances where required.
     * It is assumed that a consent of the PSU to
     * this access is already given and stored on the ASPSP system.
     * The addressed details of this account depends then on the stored consent addressed by consentId,
     * respectively the OAuth2 access token.
     *
     * **NOTE:** The account-id can represent a multicurrency account.
     * In this case the currency code is set to "XXX".
     *
     * Give detailed information about the addressed account.
     *
     * Give detailed information about the addressed account together with balance information
     *
    **/
    readAccountDetails(req: operations.ReadAccountDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ReadAccountDetailsResponse>;
    /**
     * startConsentAuthorisation - Start the authorisation process for a consent
     *
     * Create an authorisation sub-resource and start the authorisation process of a consent.
     * The message might in addition transmit authentication and authorisation related data.
     *
     * his method is iterated n times for a n times SCA authorisation in a
     * corporate context, each creating an own authorisation sub-endpoint for
     * the corresponding PSU authorising the consent.
     *
     * The ASPSP might make the usage of this access method unnecessary,
     * since the related authorisation resource will be automatically created by
     * the ASPSP after the submission of the consent data with the first POST consents call.
     *
     * The start authorisation process is a process which is needed for creating a new authorisation
     * or cancellation sub-resource.
     *
     * This applies in the following scenarios:
     *
     *   * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment
     *     initiation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
     *     uploaded by using the extended forms:
     *     * 'startAuthorisationWithPsuIdentfication',
     *     * 'startAuthorisationWithPsuAuthentication'
     *     * 'startAuthorisationWithEncryptedPsuAuthentication'
     *     * 'startAuthorisationWithAuthentciationMethodSelection'
     *   * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
     *   * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding
     *     payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
     *     by using the extended forms as indicated above.
     *   * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
     *     executing the cancellation.
     *   * The signing basket needs to be authorised yet.
     *
    **/
    startConsentAuthorisation(req: operations.StartConsentAuthorisationRequest, config?: AxiosRequestConfig): Promise<operations.StartConsentAuthorisationResponse>;
    /**
     * updateConsentsPsuData - Update PSU Data for consents
     *
     * This method update PSU data on the consents  resource if needed.
     * It may authorise a consent within the Embedded SCA Approach where needed.
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
     *   A specific update PSU data request is only applicable for
     *   * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
     *   * the selection of authentication methods.
     * * Embedded SCA Approach:
     *   The Update PSU data request might be used
     *   * to add credentials as a first factor authentication data of the PSU and
     *   * to select the authentication method and
     *   * transaction authorisation.
     *
     * The SCA Approach might depend on the chosen SCA method.
     * For that reason, the following possible update PSU data request can apply to all SCA approaches:
     *
     * * Select an SCA method in case of several SCA methods are available for the customer.
     *
     * There are the following request types on this access path:
     *   * Update PSU identification
     *   * Update PSU authentication
     *   * Select PSU autorization method
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *   * Transaction Authorisation
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *
    **/
    updateConsentsPsuData(req: operations.UpdateConsentsPsuDataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConsentsPsuDataResponse>;
}
