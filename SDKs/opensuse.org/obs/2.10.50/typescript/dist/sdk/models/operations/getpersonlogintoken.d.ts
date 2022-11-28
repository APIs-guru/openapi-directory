import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonLoginTokenPathParams extends SpeakeasyBase {
    login: string;
}
export declare class GetPersonLoginTokenSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPersonLoginTokenRequest extends SpeakeasyBase {
    pathParams: GetPersonLoginTokenPathParams;
    security: GetPersonLoginTokenSecurity;
}
export declare class GetPersonLoginTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
