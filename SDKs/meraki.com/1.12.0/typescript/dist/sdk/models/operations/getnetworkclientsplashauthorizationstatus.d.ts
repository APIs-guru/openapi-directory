import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkClientSplashAuthorizationStatusPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClientSplashAuthorizationStatusRequest extends SpeakeasyBase {
    pathParams: GetNetworkClientSplashAuthorizationStatusPathParams;
}
export declare class GetNetworkClientSplashAuthorizationStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkClientSplashAuthorizationStatus200ApplicationJsonObject?: Map<string, any>;
}
