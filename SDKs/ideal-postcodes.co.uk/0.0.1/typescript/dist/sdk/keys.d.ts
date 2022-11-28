import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Keys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkKeyUsability - checkKeyUsability
     *
     * Currently returns whether the key is useable via the `available` property.
     * You may Use this method to discover if the key is useable before making
     * further requests.
     *
     * When the `user_token` is not provided, this API returns public information on key.
     *
     * ### Testing
     *
     * To test your implementation of our API, you may use the following test keys.
     *
     * - **iddqd** Availability will return as `true`
     * - **idkfa** Availability will return as `false`
     *
    **/
    checkKeyUsability(req: operations.CheckKeyUsabilityRequest, config?: AxiosRequestConfig): Promise<operations.CheckKeyUsabilityResponse>;
    /**
     * downloadUsageHistory - downloadUsageHistory
     *
     * Returns a CSV download of lookups performed and associated information.
     *
     * Note that the `Content-Type` returned will be CSV (text/csv). For a non 200
     * response, the `Content-Type` will revert to JSON with the error code and
     * message embedded.
     *
     * This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
     *
     * A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.
     *
     * ### GDPR Update
     *
     * After May 2018, the API will begin to redact IP Address, Search Term and URL data that is older than 28 days from our stores on a weekly basis as part of our new data protection strategy. This means the aforementioned data points will no longer be retrievable from this API if it is more than 28 days old.
     *
     * Reach out to us by [mail](<mailto:support@ideal-postcodes.co.uk>) or [chat](https://chat.ideal-postcodes.co.uk) if you would like to modify this 28 day window or prefer this data not be collected at all.
     *
    **/
    downloadUsageHistory(req: operations.DownloadUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.DownloadUsageHistoryResponse>;
    /**
     * monitorKeyUsage - monitorKeyUsage
     *
     * Reports the number of lookups consumed on a key for a range of days.
     *
     * This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
     *
     * A maximum interval of 90 days can be provided for analysis. If no start or
     * end date is provided, the last 21 days will be used as the default interval.
     *
    **/
    monitorKeyUsage(req: operations.MonitorKeyUsageRequest, config?: AxiosRequestConfig): Promise<operations.MonitorKeyUsageResponse>;
}
