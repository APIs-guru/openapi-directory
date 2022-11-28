import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAuthinfo200ApplicationJsonAuthMethodEnum {
    UserSession = "user_session",
    Internal = "internal",
    StaticApiKey = "static_api_key"
}
export declare class GetAuthinfo200ApplicationJsonPermissions extends SpeakeasyBase {
    mutate?: boolean;
}
export declare class GetAuthinfo200ApplicationJson extends SpeakeasyBase {
    apiKeyId?: string;
    authMethod?: GetAuthinfo200ApplicationJsonAuthMethodEnum;
    authenticated?: boolean;
    permissions?: GetAuthinfo200ApplicationJsonPermissions;
    url?: string;
    userId?: string;
}
export declare class GetAuthinfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAuthinfo200ApplicationJsonObject?: GetAuthinfo200ApplicationJson;
}
