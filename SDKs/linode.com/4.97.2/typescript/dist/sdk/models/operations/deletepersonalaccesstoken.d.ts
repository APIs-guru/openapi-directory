import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePersonalAccessTokenPathParams extends SpeakeasyBase {
    tokenId: number;
}
export declare class DeletePersonalAccessTokenSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeletePersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeletePersonalAccessTokenRequest extends SpeakeasyBase {
    pathParams: DeletePersonalAccessTokenPathParams;
    security: DeletePersonalAccessTokenSecurity;
}
export declare class DeletePersonalAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deletePersonalAccessToken200ApplicationJsonObject?: Map<string, any>;
    deletePersonalAccessTokenDefaultApplicationJsonObject?: DeletePersonalAccessTokenDefaultApplicationJson;
}
