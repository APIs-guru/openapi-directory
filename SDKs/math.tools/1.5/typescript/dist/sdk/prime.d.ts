import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Prime {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNumbersPrimeFactors - Get the prime factors of a given number.
    **/
    getNumbersPrimeFactors(req: operations.GetNumbersPrimeFactorsRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeFactorsResponse>;
    /**
     * getNumbersPrimeIsFermatPrime - Checks whether a given number is a known fermat prime number or not.
    **/
    getNumbersPrimeIsFermatPrime(req: operations.GetNumbersPrimeIsFermatPrimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsFermatPrimeResponse>;
    /**
     * getNumbersPrimeIsFibonacciPrime - Checks whether a given number is a known fibonacci prime number or not.
    **/
    getNumbersPrimeIsFibonacciPrime(req: operations.GetNumbersPrimeIsFibonacciPrimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsFibonacciPrimeResponse>;
    /**
     * getNumbersPrimeIsMersennePrime - Checks whether a given number is a known mersenne prime number or not.
    **/
    getNumbersPrimeIsMersennePrime(req: operations.GetNumbersPrimeIsMersennePrimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsMersennePrimeResponse>;
    /**
     * getNumbersPrimeIsPartitionPrime - Checks whether a given number is a known partition prime number or not.
    **/
    getNumbersPrimeIsPartitionPrime(req: operations.GetNumbersPrimeIsPartitionPrimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsPartitionPrimeResponse>;
    /**
     * getNumbersPrimeIsPellPrime - Checks whether a given number is a known pell prime number or not.
    **/
    getNumbersPrimeIsPellPrime(req: operations.GetNumbersPrimeIsPellPrimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsPellPrimeResponse>;
    /**
     * getNumbersPrimeIsPerfect - Checks whether a given number is a perfect number or not.
    **/
    getNumbersPrimeIsPerfect(req: operations.GetNumbersPrimeIsPerfectRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsPerfectResponse>;
    /**
     * getNumbersPrimeIsPrime - Checks whether a given number is a known prime number or not.
    **/
    getNumbersPrimeIsPrime(req: operations.GetNumbersPrimeIsPrimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsPrimeResponse>;
}
