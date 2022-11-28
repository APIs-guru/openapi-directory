import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Conversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * doubleclicksearchConversionGet - Retrieves a list of conversions from a DoubleClick Search engine account.
    **/
    doubleclicksearchConversionGet(req: operations.DoubleclicksearchConversionGetRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionGetResponse>;
    /**
     * doubleclicksearchConversionGetByCustomerId - Retrieves a list of conversions from a DoubleClick Search engine account.
    **/
    doubleclicksearchConversionGetByCustomerId(req: operations.DoubleclicksearchConversionGetByCustomerIdRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionGetByCustomerIdResponse>;
    /**
     * doubleclicksearchConversionInsert - Inserts a batch of new conversions into DoubleClick Search.
    **/
    doubleclicksearchConversionInsert(req: operations.DoubleclicksearchConversionInsertRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionInsertResponse>;
    /**
     * doubleclicksearchConversionUpdate - Updates a batch of conversions in DoubleClick Search.
    **/
    doubleclicksearchConversionUpdate(req: operations.DoubleclicksearchConversionUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionUpdateResponse>;
    /**
     * doubleclicksearchConversionUpdateAvailability - Updates the availabilities of a batch of floodlight activities in DoubleClick Search.
    **/
    doubleclicksearchConversionUpdateAvailability(req: operations.DoubleclicksearchConversionUpdateAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionUpdateAvailabilityResponse>;
}
