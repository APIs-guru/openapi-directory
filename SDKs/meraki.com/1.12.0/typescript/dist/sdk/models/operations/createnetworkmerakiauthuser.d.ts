import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum {
    Guest = "Guest",
    EightHundredAndTwo1X = "802.1X",
    ClientVpn = "Client VPN"
}
export declare class CreateNetworkMerakiAuthUserRequestBodyAuthorizations extends SpeakeasyBase {
    expiresAt?: string;
    ssidNumber?: number;
}
export declare class CreateNetworkMerakiAuthUserRequestBody extends SpeakeasyBase {
    accountType?: CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;
    authorizations: CreateNetworkMerakiAuthUserRequestBodyAuthorizations[];
    email: string;
    emailPasswordToUser?: boolean;
    name: string;
    password: string;
}
export declare class CreateNetworkMerakiAuthUserRequest extends SpeakeasyBase {
    pathParams: CreateNetworkMerakiAuthUserPathParams;
    request: CreateNetworkMerakiAuthUserRequestBody;
}
export declare class CreateNetworkMerakiAuthUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkMerakiAuthUser201ApplicationJsonObject?: Map<string, any>;
}
