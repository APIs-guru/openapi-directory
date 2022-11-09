import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Use `/autocomplete` to retrieve address suggestions for a partial string.
     *
     * ### Implementing Autocomplete
     *
     * Retrieving addresses using autocomplete is a 2 step process.
     *
     * 1. Retrieve partial address suggestions via `/autocomplete/addresses`
     * 2. Retrieve the entire address by following the URL provided by the suggestion
     *
     * Step 2 will decrement your lookup balance.
     *
     * Please note, this API is [not intended to be a free standalone resource](#pricing).
     *
     * ### Testing
     *
     * `ID1 1QD` will return address suggestions, that when retrieved via `/udprn/:id` will not affect your balance.
     *
     * ### Notes
     *
     * #### Suggestion Format
     *
     * The suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as is.
     *
     * #### Querying with a Postcode
     *
     * If a postcode is passed as a query, all addresses for that postcode will be listed as the result if the limit parameter is not supplied. If a postcode forms only part of the query, your autocomplete results will be filtered by that postcode.
     *
     * #### Authentication
     *
     * When using the autocomplete API, low request latency is essential in delivering a speedy list of suggestions to the user. For this reason we recommend using query string authentication (i.e. `api_key=foo`) rather than HTTP Header authentication (i.e. `Authorization: IDEALPOSTCODES api_key="foo"`). The latter will incur additional latency as most browsers will trigger a preflight OPTIONS request for each key press.
     *
     * #### Querying Multiple Residence
     *
     * For Multiple Residence enabled keys, any Multiple Residence households will also return a UMPRN id, which can be retrieved with the `/umprn/` endpoint. Note that Multiple Residence households will always have a parent premise with a UDPRN, and a single UDPRN premise may have many Multiple Residence households with different UMPRNs. For instance:
     *
     * ```
     * {
     *   "result": {
     *     "hits": [
     *       {
     *         "suggestion": "10 Downings, London, E6",
     *         "urls": {
     *           "udprn": "/v1/udprn/7944730"
     *         },
     *         "udprn": 7944730
     *       },
     *       {
     *         "suggestion": "10 Downing Grove, Hull, HU9",
     *         "urls": {
     *           "udprn": "/v1/udprn/11168744",
     *           "umprn": "/v1/umprn/882919"
     *         },
     *         "udprn": 11168744,
     *         "umprn": 882919
     *       }
     *     ]
     *   },
     *   "code": 2000,
     *   "message": "Success"
     * }
     * ```
     *
     * ### Rate Limiting
     *
     * You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.
     *
     * | Header                  | Description |
     * | ----------------------- | -------------------------------------------------------------------------------------- |
     * | `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |
     * | `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |
     * | `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |
     *
     * ### Pricing
     *
     * This API currently does not affect your balance. However, subsequent searches require a paid request (e.g. a UDPRN search). This paid request, will yield the complete address.
     *
     * Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File).
     *
    **/
    AddressAutocomplete(req: operations.AddressAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.AddressAutocompleteResponse>;
    /**
     * Returns a list of addresses that match the query ordered by relevance score.
     * This query accepts an optional limit and page query (defaults to 10 and 0 respectively).
     *
     * If a valid postcode is passed as the query string, the entire address list
     * for that postcode is returned as the result. Note, in these cases, limit
     * parameter is ignored and fixed at 100. If your key is configured to return
     * Multiple Residence data, you may need to query more pages to return the
     * entire list as more than 100 delivery points or residences may be returned.
     *
     * ### Testing
     *
     * - **ID1 1QD** Returns a successful query response `2000`
     * - **ID1 KFA** Returns an empty query response `2000`
     * - **ID1 CLIP** Returns "no lookups remaining" error `4020`
     * - **ID1 CHOP** Returns "daily (or individual) lookup limit breached" error `4021`
     *
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     *
     * ### Notes
     *
     * This is not an address autocomplete method. Each request that returns an address incurs a lookup charge.
     *
     * If a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.
     *
     * ### Pricing
     *
     * Per lookup charges apply. Queries which find no match are not charged.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     *
    **/
    AddressSearch(req: operations.AddressSearchRequest, config?: AxiosRequestConfig): Promise<operations.AddressSearchResponse>;
    /**
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
    CheckKeyUsability(req: operations.CheckKeyUsabilityRequest, config?: AxiosRequestConfig): Promise<operations.CheckKeyUsabilityResponse>;
    /**
     * Create a licensee for the specified API Key.
    **/
    CreateLicensee(req: operations.CreateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseeResponse>;
    /**
     * Cancels a licensee key. This renders a licensee unusable. This action can be reversed if you get in contact with us.
    **/
    DeleteLicensee(req: operations.DeleteLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseeResponse>;
    /**
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
    DownloadUsageHistory(req: operations.DownloadUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.DownloadUsageHistoryResponse>;
    /**
     * Returns a list of licensees for a key.
    **/
    ListLicensees(req: operations.ListLicenseesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseesResponse>;
    /**
     * Returns an address identified via its Unique Delivery Point Reference
     * Number (UDPRN).
     *
     * You may find it useful to store UDPRN information as it can be used to
     * retrieve the most recent information for an address. It can also be used
     * to test for a "decommissioned" address.
     *
     * UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any
     * premise on the Postcode Address File. It's essentially a unique identifier
     * for every address in the UK that Royal Mail has in its database.
     *
     * ### Testing
     *
     * To test your implementation of our API we have a range of test UDPRNs
     * that yield both successful and unsuccessful responses to your request.
     * They are the following
     *
     * - <code>0</code> Returns a successful UDPRN lookup response <code>2000</code>
     * - <code>-1</code> Returns "UDPRN not found", error <code>4044</code>
     * - <code>-2</code> Returns "no lookups remaining", error <code>4020</code>
     * - <code>-3</code> Returns "daily (or individual) lookup limit breached", error <code>4021</code>
     *
     * Test requests will undergo usual authentication and restriction rules (
     * individual and daily lookup limits) to surface any problems you may have
     * during implementation. However, it will not count towards a postcode
     * lookup on your key.
     *
     * ### Pricing
     *
     * Per lookup charges apply. Empty responses are not charged.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open)
     *
    **/
    LookupUdprn(req: operations.LookupUdprnRequest, config?: AxiosRequestConfig): Promise<operations.LookupUdprnResponse>;
    /**
     * UMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.
     *
     * ### Lookup a UMPRN
     *
     * Returns an address identified via its UMPRN.
     *
     * ### Testing
     *
     * To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following:
     *
     * To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following
     *
     * - `0` Returns a successful UMPRN lookup response `2000`
     * - `-1` Returns "UMPRN not found", error `4044`
     * - `-2` Returns "no lookups remaining", error `4020`
     * - `-3` Returns "daily (or individual) lookup limit breached", error `4021`
     *
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     *
     * ### Pricing
     *
     * Per lookup charges apply. Empty responses are not charged.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     *
    **/
    LookupUmprn(req: operations.LookupUmprnRequest, config?: AxiosRequestConfig): Promise<operations.LookupUmprnResponse>;
    /**
     * Reports the number of lookups consumed on a key for a range of days.
     *
     * This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
     *
     * A maximum interval of 90 days can be provided for analysis. If no start or
     * end date is provided, the last 21 days will be used as the default interval.
     *
    **/
    MonitorKeyUsage(req: operations.MonitorKeyUsageRequest, config?: AxiosRequestConfig): Promise<operations.MonitorKeyUsageResponse>;
    /**
     * Returns the complete list of addresses for a postcode.
     *
     * Postcode searches are space and case insensitive.
     *
     * ### Postcode not found
     *
     * Please note: For postcodes that do not exist, your key is not charged, the API returns a 404 response with a response body
     *
     * ```
     * {
     *   "code": 4040,
     *   "message": "Postcode not found"
     * }
     * ```
     *
     * ### Testing
     *
     * To test your implementation of our API we have a range of test postcodes that yield both successful and unsuccessful responses to your request. They are the following:
     *
     * - `ID1 1QD` Returns a successful postcode lookup response `2000`
     * - `ID1 KFA` Returns "postcode not found", error `4040`
     * - `ID1 CLIP` Returns "no lookups remaining", error `4020`
     * - `ID1 CHOP` Returns "daily (or individual) lookup limit breached", error `4021`
     *
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     *
     * ### Multiple Residence Dataset & Pagination
     *
     * For keys which use the Multiple Residence dataset, there are a small number of postcodes which yield more than Royal Mail's maximum allowed return (of 100 addresses) per request. Multiple Residence data users have the option of paginating postcode queries if the limit is reached.
     *
     * #### Multiple Residence: Additional Query Parameters
     *
     * | Property | Description                                                                          |
     * | -------- | ------------------------------------------------------------------------------------ |
     * | `page`   | 0 indexed indicator of the page of results to receive. Defaults to `0`               |
     *
     * #### Multiple Residence: Additional Response Fields
     *
     * | Property | Description                                                                               |
     * | -------- | ----------------------------------------------------------------------------------------- |
     * | `page`   | `number` Indicates current page number                                                    |
     * | `total`  | `number` Indicates the maximum number of delivery points plus residences at this postcode |
     * | `limit`  | `number` Maximum number of results per request. Fixed at 100 for this method              |
     *
     * ### Pricing
     *
     * Per lookup charges are applied. Empty responses are not charged.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     *
    **/
    PostcodeToAddresses(req: operations.PostcodeToAddressesRequest, config?: AxiosRequestConfig): Promise<operations.PostcodeToAddressesResponse>;
    /**
     * Returns licensee information as identified by the licensee key.
    **/
    RetrieveLicensee(req: operations.RetrieveLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveLicenseeResponse>;
    /**
     * Update particulars for a licensee
    **/
    UpdateLicensee(req: operations.UpdateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseeResponse>;
    /**
     * ### Returns an address identified via its UDPRN.
     *
     * You may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a "decommissioned" address.
     *
     * ### Testing
     *
     * To test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request. They are the following:
     *
     * - `0` Returns a successful UDPRN lookup response `2000`
     * - `-1` Returns "UDPRN not found", error `4044`
     * - `-2` Returns "no lookups remaining", error `4020`
     * - `-3` Returns "daily (or individual) lookup limit breached", error `4021`
     *
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     *
     * ### Pricing
     *
     * Per lookup charges apply. Empty responses are not charged.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     *
    **/
    UpdrnToAddress(req: operations.UpdrnToAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdrnToAddressResponse>;
}
export {};
