import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkClientSplashAuthorizationStatusPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
/**
 * Splash authorization for SSID 0
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 1
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 10
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 11
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 12
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 13
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 14
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 2
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 3
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 4
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 5
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 6
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 7
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 8
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * Splash authorization for SSID 9
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9 extends SpeakeasyBase {
    isAuthorized?: boolean;
}
/**
 * The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs
**/
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids extends SpeakeasyBase {
    zero?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
    one?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
    ten?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
    eleven?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
    twelve?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
    thirteen?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
    fourteen?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
    two?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
    three?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
    four?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
    five?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
    six?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
    seven?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
    eight?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
    nine?: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;
}
export declare class UpdateNetworkClientSplashAuthorizationStatusRequestBody extends SpeakeasyBase {
    ssids: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
}
export declare class UpdateNetworkClientSplashAuthorizationStatusRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkClientSplashAuthorizationStatusPathParams;
    request: UpdateNetworkClientSplashAuthorizationStatusRequestBody;
}
export declare class UpdateNetworkClientSplashAuthorizationStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkClientSplashAuthorizationStatus200ApplicationJsonObject?: Map<string, any>;
}
