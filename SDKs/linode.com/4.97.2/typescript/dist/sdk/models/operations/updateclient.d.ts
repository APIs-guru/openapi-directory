import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateClientPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class UpdateClientSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateClientDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateClientRequest extends SpeakeasyBase {
    pathParams: UpdateClientPathParams;
    request?: shared.OAuthClientInput;
    security: UpdateClientSecurity;
}
export declare class UpdateClientResponse extends SpeakeasyBase {
    contentType: string;
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
    updateClientDefaultApplicationJsonObject?: UpdateClientDefaultApplicationJson;
}
