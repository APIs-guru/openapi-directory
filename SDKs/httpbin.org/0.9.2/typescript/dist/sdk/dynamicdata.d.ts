import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DynamicData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDelayDelay - Returns a delayed response (max of 10 seconds).
    **/
    deleteDelayDelay(req: operations.DeleteDelayDelayRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDelayDelayResponse>;
    /**
     * getBase64Value - Decodes base64url-encoded string.
    **/
    getBase64Value(req: operations.GetBase64ValueRequest, config?: AxiosRequestConfig): Promise<operations.GetBase64ValueResponse>;
    /**
     * getBytesN - Returns n random bytes generated with given seed
    **/
    getBytesN(req: operations.GetBytesNRequest, config?: AxiosRequestConfig): Promise<operations.GetBytesNResponse>;
    /**
     * getDelayDelay - Returns a delayed response (max of 10 seconds).
    **/
    getDelayDelay(req: operations.GetDelayDelayRequest, config?: AxiosRequestConfig): Promise<operations.GetDelayDelayResponse>;
    /**
     * getDrip - Drips data over a duration after an optional initial delay.
    **/
    getDrip(req: operations.GetDripRequest, config?: AxiosRequestConfig): Promise<operations.GetDripResponse>;
    /**
     * getLinksNOffset - Generate a page containing n links to other pages which do the same.
    **/
    getLinksNOffset(req: operations.GetLinksNOffsetRequest, config?: AxiosRequestConfig): Promise<operations.GetLinksNOffsetResponse>;
    /**
     * getRangeNumbytes - Streams n random bytes generated with given seed, at given chunk size per packet.
    **/
    getRangeNumbytes(req: operations.GetRangeNumbytesRequest, config?: AxiosRequestConfig): Promise<operations.GetRangeNumbytesResponse>;
    /**
     * getStreamBytesN - Streams n random bytes generated with given seed, at given chunk size per packet.
    **/
    getStreamBytesN(req: operations.GetStreamBytesNRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamBytesNResponse>;
    /**
     * getStreamN - Stream n JSON responses
    **/
    getStreamN(req: operations.GetStreamNRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamNResponse>;
    /**
     * getUuid - Return a UUID4.
    **/
    getUuid(config?: AxiosRequestConfig): Promise<operations.GetUuidResponse>;
    /**
     * patchDelayDelay - Returns a delayed response (max of 10 seconds).
    **/
    patchDelayDelay(req: operations.PatchDelayDelayRequest, config?: AxiosRequestConfig): Promise<operations.PatchDelayDelayResponse>;
    /**
     * postDelayDelay - Returns a delayed response (max of 10 seconds).
    **/
    postDelayDelay(req: operations.PostDelayDelayRequest, config?: AxiosRequestConfig): Promise<operations.PostDelayDelayResponse>;
    /**
     * putDelayDelay - Returns a delayed response (max of 10 seconds).
    **/
    putDelayDelay(req: operations.PutDelayDelayRequest, config?: AxiosRequestConfig): Promise<operations.PutDelayDelayResponse>;
    /**
     * traceDelayDelay - Returns a delayed response (max of 10 seconds).
    **/
    traceDelayDelay(req: operations.TraceDelayDelayRequest, config?: AxiosRequestConfig): Promise<operations.TraceDelayDelayResponse>;
}
