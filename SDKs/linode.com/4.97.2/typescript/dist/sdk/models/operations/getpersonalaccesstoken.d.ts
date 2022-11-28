import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonalAccessTokenPathParams extends SpeakeasyBase {
    tokenId: number;
}
export declare class GetPersonalAccessTokenSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetPersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetPersonalAccessTokenRequest extends SpeakeasyBase {
    pathParams: GetPersonalAccessTokenPathParams;
    security: GetPersonalAccessTokenSecurity;
}
export declare class GetPersonalAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    personalAccessToken?: shared.PersonalAccessToken;
    statusCode: number;
    getPersonalAccessTokenDefaultApplicationJsonObject?: GetPersonalAccessTokenDefaultApplicationJson;
}
