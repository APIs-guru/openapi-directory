import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRequestIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutRequestIdSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutRequestIdRequest extends SpeakeasyBase {
    pathParams: PutRequestIdPathParams;
    request: Uint8Array;
    security: PutRequestIdSecurity;
}
export declare class PutRequestIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
