import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileAppPathParams extends SpeakeasyBase {
    appId: number;
}
export declare class GetProfileAppSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetProfileAppDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetProfileAppRequest extends SpeakeasyBase {
    pathParams: GetProfileAppPathParams;
    security: GetProfileAppSecurity;
}
export declare class GetProfileAppResponse extends SpeakeasyBase {
    authorizedApp?: shared.AuthorizedApp;
    contentType: string;
    statusCode: number;
    getProfileAppDefaultApplicationJsonObject?: GetProfileAppDefaultApplicationJson;
}
