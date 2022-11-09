import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsBenchmarkSupportedPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsBenchmarkSupportedQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
    token: string;
}
export declare class GetApiVVersionMetalsBenchmarkSupportedRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsBenchmarkSupportedPathParams;
    queryParams: GetApiVVersionMetalsBenchmarkSupportedQueryParams;
}
export declare class GetApiVVersionMetalsBenchmarkSupportedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getApiVVersionMetalsBenchmarkSupported200ApplicationJsonStrings?: string[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
