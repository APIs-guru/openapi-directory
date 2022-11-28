import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSplashLoginAttemptsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSplashLoginAttemptsQueryParams extends SpeakeasyBase {
    loginIdentifier?: string;
    ssidNumber?: number;
    timespan?: number;
}
export declare class GetNetworkSplashLoginAttemptsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSplashLoginAttemptsPathParams;
    queryParams: GetNetworkSplashLoginAttemptsQueryParams;
}
export declare class GetNetworkSplashLoginAttemptsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSplashLoginAttempts200ApplicationJsonObject?: Map<string, any>;
}
