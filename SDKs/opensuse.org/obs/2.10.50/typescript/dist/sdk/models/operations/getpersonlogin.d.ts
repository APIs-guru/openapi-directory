import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPersonLoginPathParams extends SpeakeasyBase {
    login: string;
}
export declare class GetPersonLoginSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPersonLoginRequest extends SpeakeasyBase {
    pathParams: GetPersonLoginPathParams;
    security: GetPersonLoginSecurity;
}
export declare class GetPersonLoginResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
