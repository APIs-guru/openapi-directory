import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePersonalAccessTokenSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreatePersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreatePersonalAccessTokenRequest extends SpeakeasyBase {
    request: any;
    security: CreatePersonalAccessTokenSecurity;
}
export declare class CreatePersonalAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    personalAccessToken?: shared.PersonalAccessToken;
    statusCode: number;
    createPersonalAccessTokenDefaultApplicationJsonObject?: CreatePersonalAccessTokenDefaultApplicationJson;
}
