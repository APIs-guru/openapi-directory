import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
    merakiAuthUserId: string;
    networkId: string;
}
export declare class UpdateNetworkMerakiAuthUserRequestBodyAuthorizations extends SpeakeasyBase {
    expiresAt?: string;
    ssidNumber: number;
}
export declare class UpdateNetworkMerakiAuthUserRequestBody extends SpeakeasyBase {
    authorizations?: UpdateNetworkMerakiAuthUserRequestBodyAuthorizations[];
    emailPasswordToUser?: boolean;
    name?: string;
    password?: string;
}
export declare class UpdateNetworkMerakiAuthUserRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkMerakiAuthUserPathParams;
    request?: UpdateNetworkMerakiAuthUserRequestBody;
}
export declare class UpdateNetworkMerakiAuthUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkMerakiAuthUser200ApplicationJsonObject?: Map<string, any>;
}
