import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePersonalAccessTokenPathParams extends SpeakeasyBase {
    tokenId: number;
}
export declare class UpdatePersonalAccessTokenSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdatePersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdatePersonalAccessTokenRequest extends SpeakeasyBase {
    pathParams: UpdatePersonalAccessTokenPathParams;
    request: shared.PersonalAccessTokenInput;
    security: UpdatePersonalAccessTokenSecurity;
}
export declare class UpdatePersonalAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    personalAccessToken?: shared.PersonalAccessToken;
    statusCode: number;
    updatePersonalAccessTokenDefaultApplicationJsonObject?: UpdatePersonalAccessTokenDefaultApplicationJson;
}
