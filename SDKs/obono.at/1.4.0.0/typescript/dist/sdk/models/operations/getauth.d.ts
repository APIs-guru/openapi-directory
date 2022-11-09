import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAuthSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetAuthRequest extends SpeakeasyBase {
    security: GetAuthSecurity;
}
export declare class GetAuthResponse extends SpeakeasyBase {
    authResult?: shared.AuthResult;
    contentType: string;
    statusCode: number;
}
