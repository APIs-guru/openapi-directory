import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountLoginPathParams extends SpeakeasyBase {
    loginId: number;
}
export declare class GetAccountLoginSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetAccountLoginDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetAccountLoginRequest extends SpeakeasyBase {
    pathParams: GetAccountLoginPathParams;
    security: GetAccountLoginSecurity;
}
export declare class GetAccountLoginResponse extends SpeakeasyBase {
    contentType: string;
    login?: shared.Login;
    statusCode: number;
    getAccountLoginDefaultApplicationJsonObject?: GetAccountLoginDefaultApplicationJson;
}
