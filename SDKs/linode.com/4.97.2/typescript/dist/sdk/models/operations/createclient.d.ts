import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateClientRequestBodyInput extends SpeakeasyBase {
    label: string;
    public?: boolean;
    redirectUri: string;
}
export declare class CreateClientSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateClientDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateClientRequest extends SpeakeasyBase {
    request?: CreateClientRequestBodyInput;
    security: CreateClientSecurity;
}
export declare class CreateClientResponse extends SpeakeasyBase {
    contentType: string;
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
    createClientDefaultApplicationJsonObject?: CreateClientDefaultApplicationJson;
}
