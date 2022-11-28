import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClientPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class GetClientSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetClientDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetClientRequest extends SpeakeasyBase {
    pathParams: GetClientPathParams;
    security: GetClientSecurity;
}
export declare class GetClientResponse extends SpeakeasyBase {
    contentType: string;
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
    getClientDefaultApplicationJsonObject?: GetClientDefaultApplicationJson;
}
