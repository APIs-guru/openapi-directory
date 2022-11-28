import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Umprn {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * lookupUmprn - lookupUMPRN
     *
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
    lookupUmprn(req: operations.LookupUmprnRequest, config?: AxiosRequestConfig): Promise<operations.LookupUmprnResponse>;
}
