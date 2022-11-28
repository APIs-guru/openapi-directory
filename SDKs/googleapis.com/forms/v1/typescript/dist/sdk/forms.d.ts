import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Forms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * formsFormsBatchUpdate - Change the form with a batch of updates.
    **/
    formsFormsBatchUpdate(req: operations.FormsFormsBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.FormsFormsBatchUpdateResponse>;
    /**
     * formsFormsCreate - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
    **/
    formsFormsCreate(req: operations.FormsFormsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FormsFormsCreateResponse>;
    /**
     * formsFormsGet - Get a form.
    **/
    formsFormsGet(req: operations.FormsFormsGetRequest, config?: AxiosRequestConfig): Promise<operations.FormsFormsGetResponse>;
    /**
     * formsFormsResponsesGet - Get one response from the form.
    **/
    formsFormsResponsesGet(req: operations.FormsFormsResponsesGetRequest, config?: AxiosRequestConfig): Promise<operations.FormsFormsResponsesGetResponse>;
    /**
     * formsFormsResponsesList - List a form's responses.
    **/
    formsFormsResponsesList(req: operations.FormsFormsResponsesListRequest, config?: AxiosRequestConfig): Promise<operations.FormsFormsResponsesListResponse>;
    /**
     * formsFormsWatchesCreate - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
    **/
    formsFormsWatchesCreate(req: operations.FormsFormsWatchesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FormsFormsWatchesCreateResponse>;
    /**
     * formsFormsWatchesDelete - Delete a watch.
    **/
    formsFormsWatchesDelete(req: operations.FormsFormsWatchesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FormsFormsWatchesDeleteResponse>;
    /**
     * formsFormsWatchesList - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
    **/
    formsFormsWatchesList(req: operations.FormsFormsWatchesListRequest, config?: AxiosRequestConfig): Promise<operations.FormsFormsWatchesListResponse>;
    /**
     * formsFormsWatchesRenew - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.
    **/
    formsFormsWatchesRenew(req: operations.FormsFormsWatchesRenewRequest, config?: AxiosRequestConfig): Promise<operations.FormsFormsWatchesRenewResponse>;
}
