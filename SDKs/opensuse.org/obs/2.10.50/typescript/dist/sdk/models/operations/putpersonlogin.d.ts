import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPersonLoginPathParams extends SpeakeasyBase {
    login: string;
}
export declare class PutPersonLoginSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutPersonLoginRequest extends SpeakeasyBase {
    pathParams: PutPersonLoginPathParams;
    request: Uint8Array;
    security: PutPersonLoginSecurity;
}
export declare class PutPersonLoginResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
