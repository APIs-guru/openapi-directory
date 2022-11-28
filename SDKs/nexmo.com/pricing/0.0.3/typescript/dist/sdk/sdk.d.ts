import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://rest.nexmo.com/account"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * retrievePrefixPricing - Retrieve outbound pricing for a specific dialing prefix.
     *
     * Retrieves the pricing information based on the dialing prefix.
     *
    **/
    retrievePrefixPricing(req: operations.RetrievePrefixPricingRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePrefixPricingResponse>;
    /**
     * retrievePricingAllCountries - Retrieve outbound pricing for all countries.
     *
     * Retrieves the pricing information for all countries.
     *
    **/
    retrievePricingAllCountries(req: operations.RetrievePricingAllCountriesRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePricingAllCountriesResponse>;
    /**
     * retrievePricingCountry - Retrieve outbound pricing for a specific country.
     *
     * Retrieves the pricing information based on the specified country.
     *
    **/
    retrievePricingCountry(req: operations.RetrievePricingCountryRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePricingCountryResponse>;
}
export {};
