import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRequestIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetRequestIdQueryParams extends SpeakeasyBase {
    withfullhistory?: string;
    withhistory?: string;
}
export declare class GetRequestIdSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetRequestIdRequest extends SpeakeasyBase {
    pathParams: GetRequestIdPathParams;
    queryParams: GetRequestIdQueryParams;
    security: GetRequestIdSecurity;
}
export declare class GetRequestIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
