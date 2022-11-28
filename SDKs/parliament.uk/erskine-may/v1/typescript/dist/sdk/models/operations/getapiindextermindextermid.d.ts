import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiIndexTermIndexTermIdPathParams extends SpeakeasyBase {
    indexTermId: number;
}
export declare class GetApiIndexTermIndexTermIdRequest extends SpeakeasyBase {
    pathParams: GetApiIndexTermIndexTermIdPathParams;
}
export declare class GetApiIndexTermIndexTermIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMayIndexTerm?: shared.ErskineMayIndexTerm;
    statusCode: number;
}
