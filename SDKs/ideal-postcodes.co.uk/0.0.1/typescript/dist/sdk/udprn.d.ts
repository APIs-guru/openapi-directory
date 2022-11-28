import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Udprn {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * lookupUdprn - lookupUDPRN
     *
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
    lookupUdprn(req: operations.LookupUdprnRequest, config?: AxiosRequestConfig): Promise<operations.LookupUdprnResponse>;
}
