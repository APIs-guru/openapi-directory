import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Addresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addressSearch - addressSearch
     *
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
    addressSearch(req: operations.AddressSearchRequest, config?: AxiosRequestConfig): Promise<operations.AddressSearchResponse>;
    /**
     * updrnToAddress - updrnToAddress
     *
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
    updrnToAddress(req: operations.UpdrnToAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdrnToAddressResponse>;
}
