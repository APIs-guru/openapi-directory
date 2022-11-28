import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sinks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * loggingSinksCreate - Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
    **/
    loggingSinksCreate(req: operations.LoggingSinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.LoggingSinksCreateResponse>;
    /**
     * loggingSinksDelete - Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
    **/
    loggingSinksDelete(req: operations.LoggingSinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LoggingSinksDeleteResponse>;
    /**
     * loggingSinksGet - Gets a sink.
    **/
    loggingSinksGet(req: operations.LoggingSinksGetRequest, config?: AxiosRequestConfig): Promise<operations.LoggingSinksGetResponse>;
    /**
     * loggingSinksList - Lists sinks.
    **/
    loggingSinksList(req: operations.LoggingSinksListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingSinksListResponse>;
    /**
     * loggingSinksUpdate - Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
    **/
    loggingSinksUpdate(req: operations.LoggingSinksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LoggingSinksUpdateResponse>;
}
