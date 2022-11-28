import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonalAccessTokensSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetPersonalAccessTokens200ApplicationJson extends SpeakeasyBase {
    data?: shared.PersonalAccessToken[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetPersonalAccessTokensDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetPersonalAccessTokensRequest extends SpeakeasyBase {
    security: GetPersonalAccessTokensSecurity;
}
export declare class GetPersonalAccessTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPersonalAccessTokens200ApplicationJsonObject?: GetPersonalAccessTokens200ApplicationJson;
    getPersonalAccessTokensDefaultApplicationJsonObject?: GetPersonalAccessTokensDefaultApplicationJson;
}
