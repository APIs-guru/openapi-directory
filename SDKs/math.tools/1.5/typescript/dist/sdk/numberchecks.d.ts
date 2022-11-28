import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class NumberChecks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNumbersIsCube - Checks whether a given number is a cube number or not.
    **/
    getNumbersIsCube(req: operations.GetNumbersIsCubeRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersIsCubeResponse>;
    /**
     * getNumbersIsPalindrome - Checks whether a given number is a palindrome number or not.
    **/
    getNumbersIsPalindrome(req: operations.GetNumbersIsPalindromeRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersIsPalindromeResponse>;
    /**
     * getNumbersIsSquare - Checks whether a given number is a square number or not.
    **/
    getNumbersIsSquare(req: operations.GetNumbersIsSquareRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersIsSquareResponse>;
    /**
     * getNumbersIsTriangle - Checks whether a given number is a triangle number or not.
    **/
    getNumbersIsTriangle(req: operations.GetNumbersIsTriangleRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersIsTriangleResponse>;
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
