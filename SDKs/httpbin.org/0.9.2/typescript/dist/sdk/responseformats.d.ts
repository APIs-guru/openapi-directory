import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ResponseFormats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBrotli - Returns Brotli-encoded data.
    **/
    getBrotli(config?: AxiosRequestConfig): Promise<operations.GetBrotliResponse>;
    /**
     * getDeflate - Returns Deflate-encoded data.
    **/
    getDeflate(config?: AxiosRequestConfig): Promise<operations.GetDeflateResponse>;
    /**
     * getDeny - Returns page denied by robots.txt rules.
    **/
    getDeny(config?: AxiosRequestConfig): Promise<operations.GetDenyResponse>;
    /**
     * getEncodingUtf8 - Returns a UTF-8 encoded body.
    **/
    getEncodingUtf8(config?: AxiosRequestConfig): Promise<operations.GetEncodingUtf8Response>;
    /**
     * getGzip - Returns GZip-encoded data.
    **/
    getGzip(config?: AxiosRequestConfig): Promise<operations.GetGzipResponse>;
    /**
     * getHtml - Returns a simple HTML document.
    **/
    getHtml(config?: AxiosRequestConfig): Promise<operations.GetHtmlResponse>;
    /**
     * getJson - Returns a simple JSON document.
    **/
    getJson(config?: AxiosRequestConfig): Promise<operations.GetJsonResponse>;
    /**
     * getRobotsTxt - Returns some robots.txt rules.
    **/
    getRobotsTxt(config?: AxiosRequestConfig): Promise<operations.GetRobotsTxtResponse>;
    /**
     * getXml - Returns a simple XML document.
    **/
    getXml(config?: AxiosRequestConfig): Promise<operations.GetXmlResponse>;
}
