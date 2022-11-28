import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetClientSecretPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class ResetClientSecretSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ResetClientSecretDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ResetClientSecretRequest extends SpeakeasyBase {
    pathParams: ResetClientSecretPathParams;
    security: ResetClientSecretSecurity;
}
export declare class ResetClientSecretResponse extends SpeakeasyBase {
    contentType: string;
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
    resetClientSecretDefaultApplicationJsonObject?: ResetClientSecretDefaultApplicationJson;
}
