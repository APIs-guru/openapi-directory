import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getImage - Returns a simple image of the type suggest by the Accept header.
    **/
    getImage(config?: AxiosRequestConfig): Promise<operations.GetImageResponse>;
    /**
     * getImageJpeg - Returns a simple JPEG image.
    **/
    getImageJpeg(config?: AxiosRequestConfig): Promise<operations.GetImageJpegResponse>;
    /**
     * getImagePng - Returns a simple PNG image.
    **/
    getImagePng(config?: AxiosRequestConfig): Promise<operations.GetImagePngResponse>;
    /**
     * getImageSvg - Returns a simple SVG image.
    **/
    getImageSvg(config?: AxiosRequestConfig): Promise<operations.GetImageSvgResponse>;
    /**
     * getImageWebp - Returns a simple WEBP image.
    **/
    getImageWebp(config?: AxiosRequestConfig): Promise<operations.GetImageWebpResponse>;
}
