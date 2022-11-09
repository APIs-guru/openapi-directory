import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";
export declare const headerMetadataKey = "headerParam";
export declare function GetHeadersFromRequest(headerParams: any): any;
export declare function GetHeadersFromResponse(headers: RawAxiosResponseHeaders | AxiosResponseHeaders): Map<string, string[]>;
