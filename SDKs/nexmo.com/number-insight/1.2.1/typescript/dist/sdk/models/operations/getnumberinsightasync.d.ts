import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumberInsightAsyncPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class GetNumberInsightAsyncQueryParams extends SpeakeasyBase {
    callback: string;
    cnam?: boolean;
    country?: string;
    ip?: string;
    number: string;
}
export declare class GetNumberInsightAsyncRequest extends SpeakeasyBase {
    pathParams: GetNumberInsightAsyncPathParams;
    queryParams: GetNumberInsightAsyncQueryParams;
}
export declare class GetNumberInsightAsyncResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getNumberInsightAsync200ApplicationJsonOneOf?: any;
}
