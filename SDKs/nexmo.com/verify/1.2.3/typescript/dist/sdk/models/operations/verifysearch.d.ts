import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VerifySearchPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class VerifySearchQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    requestId: string;
    requestIds?: string[];
}
export declare class VerifySearchRequest extends SpeakeasyBase {
    pathParams: VerifySearchPathParams;
    queryParams: VerifySearchQueryParams;
}
export declare class VerifySearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    verifySearch200ApplicationJsonOneOf?: any;
}
