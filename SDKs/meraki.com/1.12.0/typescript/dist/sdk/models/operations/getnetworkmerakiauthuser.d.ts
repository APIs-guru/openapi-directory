import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkMerakiAuthUserPathParams extends SpeakeasyBase {
    merakiAuthUserId: string;
    networkId: string;
}
export declare class GetNetworkMerakiAuthUserRequest extends SpeakeasyBase {
    pathParams: GetNetworkMerakiAuthUserPathParams;
}
export declare class GetNetworkMerakiAuthUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkMerakiAuthUser200ApplicationJsonObject?: Map<string, any>;
}
