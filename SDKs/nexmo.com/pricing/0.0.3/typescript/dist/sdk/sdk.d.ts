import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Retrieves the pricing information based on the dialing prefix.
     *
    **/
    RetrievePrefixPricing(req: operations.RetrievePrefixPricingRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePrefixPricingResponse>;
    /**
     * Retrieves the pricing information for all countries.
     *
    **/
    RetrievePricingAllCountries(req: operations.RetrievePricingAllCountriesRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePricingAllCountriesResponse>;
    /**
     * Retrieves the pricing information based on the specified country.
     *
    **/
    RetrievePricingCountry(req: operations.RetrievePricingCountryRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePricingCountryResponse>;
}
export {};
