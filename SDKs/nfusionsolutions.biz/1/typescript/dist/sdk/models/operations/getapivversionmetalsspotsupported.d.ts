import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsSpotSupportedPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsSpotSupportedQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
    token: string;
}
export declare class GetApiVVersionMetalsSpotSupportedRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsSpotSupportedPathParams;
    queryParams: GetApiVVersionMetalsSpotSupportedQueryParams;
}
export declare class GetApiVVersionMetalsSpotSupportedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getApiVVersionMetalsSpotSupported200ApplicationJsonStrings?: string[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
