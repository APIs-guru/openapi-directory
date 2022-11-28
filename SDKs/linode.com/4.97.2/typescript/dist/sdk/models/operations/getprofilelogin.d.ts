import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileLoginPathParams extends SpeakeasyBase {
    loginId: number;
}
export declare class GetProfileLoginSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetProfileLoginDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetProfileLoginRequest extends SpeakeasyBase {
    pathParams: GetProfileLoginPathParams;
    security: GetProfileLoginSecurity;
}
export declare class GetProfileLoginResponse extends SpeakeasyBase {
    contentType: string;
    login?: shared.Login;
    statusCode: number;
    getProfileLoginDefaultApplicationJsonObject?: GetProfileLoginDefaultApplicationJson;
}
