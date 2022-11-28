import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTokenPathParams extends SpeakeasyBase {
    tokenNumber: string;
}
export declare class GetTokenSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetTokenRequest extends SpeakeasyBase {
    pathParams: GetTokenPathParams;
    security: GetTokenSecurity;
}
export declare class GetTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
