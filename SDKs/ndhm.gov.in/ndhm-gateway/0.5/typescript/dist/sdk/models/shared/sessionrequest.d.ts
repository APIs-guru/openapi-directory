import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SessionRequestGrantTypeEnum {
    ClientCredentials = "client_credentials",
    RefreshToken = "refresh_token"
}
export declare class SessionRequest extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    grantType: SessionRequestGrantTypeEnum;
    refreshToken?: string;
}
