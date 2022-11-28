import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Postcodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postcodeToAddresses - postcodeToAddresses
     *
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
    postcodeToAddresses(req: operations.PostcodeToAddressesRequest, config?: AxiosRequestConfig): Promise<operations.PostcodeToAddressesResponse>;
}
