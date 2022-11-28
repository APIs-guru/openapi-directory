import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentsFetchHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05ConsentsFetchRequest extends SpeakeasyBase {
    headers: PostV05ConsentsFetchHeaders;
    request: shared.ConsentFetchRequest;
}
export declare class PostV05ConsentsFetchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
